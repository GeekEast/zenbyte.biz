import { AutoSidebarOptions } from './plugin/auto-sidebar/index';
import { DefaultTheme } from 'vitepress';

// https://vitepress.dev/reference/default-theme-config
export function getNavConfig(): DefaultTheme.NavItem[] {
  // setup each section's index page.
  return [
    {
      text: 'Myriad',
      link: '/docs/bugs/2024/bug-1.md',
    },
    { text: 'Notes', link: '/docs/notes/' },
    { text: 'Life', link: '/docs/life/index.md' },
    { text: 'Events', link: '/docs/events/aws-summit-2024.md' },
  ];
}
