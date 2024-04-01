import { DefaultTheme } from 'vitepress';
import algolia from '../algolia.json';

export function getSearchConfig():
  | { provider: 'local'; options?: DefaultTheme.LocalSearchOptions }
  | { provider: 'algolia'; options: DefaultTheme.AlgoliaSearchOptions } {
  return {
    provider: 'algolia',
    options: {
      appId: 'SX8FM9ZST4',
      // search-only api key
      apiKey: '2a58437ed867379befc25d0ca46dd0dd',
      indexName: algolia.index_name,
      placeholder: 'Search ZenByte',
    },
  };
}
