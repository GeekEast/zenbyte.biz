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

const titleCache: Record<string, string> = {};

function asTitle(str: string) {
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
  console.log(paths);

  const basePath = path.relative(opts.root, docsPath);
  const sidebar: DefaultTheme.SidebarMulti = {};

  paths.forEach((fullPath) => {
    const segments = fullPath.split('/');
    const absolutePath = path.resolve(docsPath, fullPath);
    if (segments.length === 0) return;
    // { "/demo/dir1/":[]}
    const topLevel = basePath
      ? `/${basePath}/${segments.shift()}/`
      : `/${segments.shift()}/`;
    // 如果第一级是文件
    if (topLevel.endsWith('.md')) return;
    if (!sidebar[topLevel]) {
      sidebar[topLevel] = [];
    }
    let currentLevel = sidebar[topLevel] as DefaultTheme.SidebarItem[];
    segments.forEach((segment) => {
      let curConfig = currentLevel.find((item) => item.text === segment);
      if (!curConfig) {
        const itemConfig: DefaultTheme.SidebarItem = {};
        // is file
        if (segment.endsWith('.md')) {
          const route = getRoute(opts.root, absolutePath);
          itemConfig.text = matchTitle(absolutePath);
          itemConfig.link = route;
          // cache title
          titleCache[route] = itemConfig.text;
        } else {
          itemConfig.text = asTitle(segment);
          itemConfig.collapsed = opts.collapse;
          itemConfig.items = [];
        }
        currentLevel.push(itemConfig);
        curConfig = itemConfig;
      }
      currentLevel = curConfig.items as DefaultTheme.SidebarItem[];
    });
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

function getRoute(root: string, absPath: string) {
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
          const route = getRoute(opts.root, filePath);
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
