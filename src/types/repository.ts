
export interface Repository {
  id: number;
  name: string;
  full_name: string;
  desc: string | null;
  url: string;
  stars: number;
  forks: number;
  lang: string | null;
  last_updated: string;
  created_at: string;
  open_issues_count: number;
  topics: string[];
  archived: boolean;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  license: {
    name: string;
    spdx_id: string;
  } | null;
  trust_level: "Official" | "Trusted" | "Community";
  tc_references: {
    slug: string;
    topic_id: number;
    topic_url: string;
    title: string;
  }[];
  "os-categories": string[];
}

export interface SearchFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  languages: string[];
  trustLevel: string;
  setTrustLevel: (level: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}
