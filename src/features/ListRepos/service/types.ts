export type GitHubRepositoryResponse = {
  items: Array<GitHubRepositoryInfo>;
  total_count: number;
  incomplete_results: boolean;
};

export type GitHubRepositoryInfo = {
  id: number;
  full_name: string;
  owner: {
    avatar_url: string;
  };
  html_url: string;
  description: string;
  language: string;
  license: {
    name: string;
  };
  updated_at: Date;
  stargazers_count: number;
};
