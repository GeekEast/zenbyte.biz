import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

import type { ViteDevServer, Plugin } from 'vite';
import type { DefaultTheme } from 'vitepress';

export interface AutoSidebarOptions {
  /**
   * call back when sidebar resolved.
   */
  sidebarResolved?: (
    value: DefaultTheme.SidebarMulti
  ) => DefaultTheme.SidebarMulti;
  /**
   * doc dir
   */
  docs?: string;
  /**
   * ignore some file
   */
  ignores?: string[];
  /**
   * .vitepress 所在的文件夹
   */
  root?: string;
  collapse?: boolean;
}

// global cache <link, title>
const titleCache: Record<string, string> = {};

function asTitle(str?: string) {
  if (!str) return;

  // Split the string into an array of words
  const words = str.split('-');

  // Capitalize the first letter of each word
  const camelCaseWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the words back together to form the camel case string
  const camelCaseStr = camelCaseWords.join(' ');

  return camelCaseStr;
}

function getSidebarConfig(opts: Required<AutoSidebarOptions>) {
  const docsPath = opts.docs;
  const paths = glob.sync('**/*.md', {
    cwd: docsPath,
    ignore: opts.ignores,
  });

  const basePath = path.relative(opts.root, docsPath); // default to ""
  const sidebar: DefaultTheme.SidebarMulti = {};

  paths.forEach((fullPath) => {
    const segments = fullPath.split('/');
    // the absolute path
    const absolutePath = path.resolve(docsPath, fullPath);

    // nothing find, end
    if (segments.length === 0) {
      return;
    }

    // extract the top level path
    const topLevelPath = basePath
      ? `/${basePath}/${segments.shift()}/`
      : `/${segments.shift()}/`;

    // will ignore root level markdown file, /root or /docs based on user's opt docs setting
    if (topLevelPath.endsWith('.md')) return;

    // e.g. { "/notes/": []}
    if (!sidebar[topLevelPath]) {
      sidebar[topLevelPath] = [];
    }

    let topLevelItems = sidebar[topLevelPath] as DefaultTheme.SidebarItem[];

    console.log(segments);

    // iterate through the rest of the segments
    segments.forEach((segment) => {
      let curConfig = topLevelItems.find(
        (item) => item.text === asTitle(segment)
      );
      if (!curConfig) {
        const itemConfig: DefaultTheme.SidebarItem = {};
        // is file
        if (segment.endsWith('.md')) {
          // get title from markdown file
          itemConfig.text = matchTitle(absolutePath);

          // get link from abs path
          const link = getLink(opts.root, absolutePath);
          itemConfig.link = link;

          // cache title
          titleCache[link] = itemConfig.text;
        } else {
          // title will be beautified
          itemConfig.text = asTitle(segment);
          itemConfig.collapsed = opts.collapse;
          itemConfig.items = [];
        }
        topLevelItems.push(itemConfig);
        curConfig = itemConfig;
      }
      topLevelItems = curConfig.items as DefaultTheme.SidebarItem[];
    });
  });

  // add sort by file name alphabetically
  Object.keys(sidebar).forEach((key) => {
    if (Array.isArray(sidebar[key])) {
      sidebar[key].sort((a, b) => {
        const aPath = a.link?.split('/');
        const aFileName = aPath ? aPath[aPath.length - 1] : '';
        const bPath = b.link?.split('/');
        const bFileName = bPath ? bPath[bPath.length - 1] : '';
        // sort by filename alphabetically
        return aFileName.localeCompare(bFileName);
      });
    }
  });

  if (opts.sidebarResolved) {
    return opts.sidebarResolved(sidebar);
  }
  return sidebar;
}

function matchTitle(p: string) {
  const content = fs.readFileSync(p, 'utf-8');
  const text = ((content.match(/^#\s*(.*)/m) || [])[1] || '').trim();
  return text;
}

function getLink(root: string, absPath: string) {
  return '/' + path.relative(root, absPath);
}

function normalizeOptions(
  options: AutoSidebarOptions
): Required<AutoSidebarOptions> {
  let root = options.root;

  // resolve root directory
  if (!root) {
    const files = glob.sync('**/.vitepress/config.*', {
      cwd: process.cwd(),
      dot: true,
      ignore: ['node_modules/**/*', '**/.vitepress/config.*.mjs'],
    });

    if (files.length !== 1) {
      console.error('[WARNING] 找到多个 .vitepress/config 配置文件', files);
    }
    // ../../ of config.ts is the root dir
    root = path.resolve(files[0], '../..');
  }

  return {
    root,
    docs: options.docs || root, // default to root dir
    ignores: options.ignores ?? [],
    sidebarResolved:
      options.sidebarResolved ??
      function (sidebar) {
        return sidebar;
      },
    collapse: true,
  };
}

export const VitePluginAutoSidebar = (
  options: AutoSidebarOptions = {}
): Plugin => {
  const opts = normalizeOptions(options);
  return {
    name: 'VitepressAutoSidebar',
    config(config) {
      // @ts-ignore
      config.vitepress.site.themeConfig.sidebar = getSidebarConfig(opts);
      return config;
    },
    configureServer: ({ watcher, restart }: ViteDevServer) => {
      const fsWatcher = watcher.add('*.md');
      fsWatcher.on('all', (event, filePath) => {
        // add a folder, ignore
        if (event === 'addDir' || event === 'add') return;
        if (event === 'unlinkDir' || event === 'unlink') {
          restart();
          return;
        }
        if (event === 'change') {
          const title = matchTitle(filePath);
          const route = getLink(opts.root, filePath);
          if (!route || !title) return;
          // title is not changed
          if (title === titleCache[route]) return;
          restart();
          return;
        }
      });
    },
  };
};
