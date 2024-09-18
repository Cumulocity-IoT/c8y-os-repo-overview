import { Pipe, PipeTransform } from '@angular/core';
import { RepoEntry } from './repo.type';

@Pipe({
  name: 'repoFilter',
  standalone: true
})
export class RepoFilterPipe implements PipeTransform {
  transform(repos: RepoEntry[], searchText: string, category: string, trust_level: string): RepoEntry[] {
    if (!repos?.length) {
      return [];
    }

    if (category) {
      repos = repos.filter((repo) => Array.isArray(repo['os-categories']) && repo['os-categories'].includes(category));
    }

    if (trust_level) {
      repos = repos.filter((repo) => repo.trust_level === trust_level);
    }

    if (searchText) {
      const searchTextLower = searchText.toLowerCase();
      repos = repos.filter((repo) => {
        const repoName = repo.name.toLowerCase();
        if (repoName.includes(searchTextLower)) {
          return true;
        }

        const repoDesc = (repo.desc || '').toLowerCase();
        if (repoDesc.includes(searchTextLower)) {
          return true;
        }

        return false;
      });
    }


    return repos;
  }
}
