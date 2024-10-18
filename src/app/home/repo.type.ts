/**
 * @deprecated actually only here to get the type of the repo.json file and ensure it is compatible with the ``RepoEntry`` interface
 */
async function getRepoJSON(): Promise<RepoEntry[]> {
  const repos = (
    await import(/* webpackIgnore: true */ '../../assets/repos.json')
  ).default;
  return repos;
}

export interface RepoEntry {
  name: string;
  owner: string;
  desc: string | null;
  archived: boolean;
  topics: string[];
  lang: string | null;
  license: string;
  created_at: string;
  last_updated: string;
  stars: number;
  forks: number;
  full_name: string;
  default_branch: string;
  url: string;
  tc_references: {
    slug: string;
    topic_id: number;
    topic_url: string;
    title: string;
  }[];
  'os-categories': string[];
  trust_level: string;
}
