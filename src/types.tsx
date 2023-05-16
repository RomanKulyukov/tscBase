export type ItemType = {
  name: string;
  clone_url: string;
  description: string;
  watchers: number;
  stargazers_count: number;
  forks: number;
  id: number;
  open_issues: number;
};
export interface ResultsType {
  items: ItemType[];
}

// export type FilterType = {
//   sort: string;
//   order: string;
// };
