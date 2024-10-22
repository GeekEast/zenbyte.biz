import { AutoSidebarOptions } from './plugin/auto-sidebar/index';
import { DefaultTheme } from 'vitepress';

// https://vitepress.dev/reference/default-theme-config
export function getNavConfig(): DefaultTheme.NavItem[] {
  // setup each section's index page.
  return [
    { text: '🧑‍💻 Tech', link: '/docs/notes/' },
    { text: '🧘 Mantra', link: '/docs/mantra/' },
    { text: '📅 Events', link: '/docs/events/' },
    { text: '🏸 Badminton', link: '/docs/badminton/' },
  ];
}
