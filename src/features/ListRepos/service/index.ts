import { RepositoryInfosProps } from '..';
import { GitHubRepositoryResponse } from './types';

export class GitHubService {
  static apiUrl = 'https://api.github.com/search/repositories';
  static itensPerPage = 8;

  static async getRepos(searchTerm: string, page: number): Promise<RepositoryInfosProps> {
    try {
      const response = await fetch(
        `${this.apiUrl}?q=${searchTerm}&per_page=${this.itensPerPage}&page=${page}`,
      );
      if (response.ok) {
        const data: GitHubRepositoryResponse = await response.json();
        return {
          count: data.total_count,
          items: data.items.map((item) => {
            return {
              id: item.id,
              title: item.full_name,
              description: item.description ?? '',
              img: item.owner.avatar_url,
              language: item.language,
              license: item.license?.name ?? null,
              url: item.html_url,
              stars: item.stargazers_count,
              lastUpdate: new Date(item.updated_at),
            };
          }),
        };
      } else {
        throw new Error('Generic error');
      }
    } catch (error) {
      throw new Error('Error searching repositories');
    }
  }
}
