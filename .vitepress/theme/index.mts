import DefaultTheme from 'vitepress/theme';
import googleAnalytics from 'vitepress-plugin-google-analytics';
import './custom.css';
import giscus from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { toRefs } from 'vue';

export default {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    googleAnalytics({
      id: 'G-NGLYK3RRPY',
    });
  },
  setup() {
    // Get frontmatter and route
    const { frontmatter } = toRefs(useData());
    const route = useRoute();

    // Obtain configuration from: https://giscus.app/
    giscus(
      {
        repo: 'GeekEast/zenbyte.biz',
        repoId: 'R_kgDOLn2hzA',
        category: 'General', // default: `General`
        categoryId: 'DIC_kwDOLn2hzM4CeZkW',
        mapping: 'pathname', // default: `pathname`
        inputPosition: 'top', // default: `top`
        lang: 'en', // default: `zh-CN`
        lightTheme: 'light', // default: `light`
        darkTheme: 'transparent_dark', // default: `transparent_dark`
        loading: 'lazy',
        emitMetadata: '0',
        reactionsEnabled: '1',
        strict: '0',
      },
      {
        frontmatter,
        route,
      },
      // Whether to activate the comment area on all pages.
      // The default is true, which means enabled, this parameter can be ignored;
      // If it is false, it means it is not enabled.
      // You can use `comment: true` preface to enable it separately on the page.
      true
    );
  },
};
