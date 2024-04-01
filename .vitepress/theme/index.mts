import DefaultTheme from 'vitepress/theme';
import googleAnalytics from 'vitepress-plugin-google-analytics';
import './custom.css';

export default {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    googleAnalytics({
      id: 'G-NGLYK3RRPY',
    });
  },
};
