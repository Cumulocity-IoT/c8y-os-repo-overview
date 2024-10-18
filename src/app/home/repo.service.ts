import { Injectable } from '@angular/core';
import { RepoEntry } from './repo.type';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  readonly installableCategories = ['Extension', 'UI Plugin'];

  async getRepoJSON(): Promise<RepoEntry[]> {
    const response = await fetch('https://cumulocity-iot.github.io/cumulocity-os-repo-overview/repos.json');
    if (response.status !== 200) {
      throw new Error(`Failed to fetch repos.json: ${response.statusText}`);
    }

    return response.json();
  }

  isInstallable(repo: RepoEntry): boolean {
    if (!repo?.['os-categories']?.length) {
      return false;
    }

    return repo['os-categories'].some(category => this.installableCategories.includes(category));
  }
}
