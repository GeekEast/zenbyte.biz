import { DefaultTheme } from 'vitepress';

// https://vitepress.dev/reference/default-theme-config
export function getNavConfig(): DefaultTheme.NavItem[] {
  // setup each section's index page.
  return [{ text: 'Notes', link: '/notes/' }];
}
