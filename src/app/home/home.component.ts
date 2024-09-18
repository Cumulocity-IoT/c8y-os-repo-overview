import { Component, OnInit } from '@angular/core';
import { RepoService } from './repo.service';
import { AsyncPipe, JsonPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import {
  IconDirective,
  DatePipe,
  LoadingComponent,
  CoreModule,
} from '@c8y/ngx-components';
import { InstallHrefPipe } from './install-href.pipe';
import { RouterLink } from '@angular/router';
import { RepoEntry } from './repo.type';
import { RepoFilterPipe } from './repo-filter.pipe';
import { FormsModule } from '@angular/forms';
import { uniq } from 'lodash-es';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf,
    IconDirective,
    NgClass,
    DatePipe,
    NgIf,
    AsyncPipe,
    LoadingComponent,
    InstallHrefPipe,
    RouterLink,
    CoreModule,
    RepoFilterPipe,
    FormsModule,
  ],
})
export class HomeComponent implements OnInit {
  loading = true;
  repos: RepoEntry[] = [];
  listClass: any;
  searchText = '';
  category = '';
  categoryOptions: string[] = [];
  trust = '';
  trustOptions: string[] = [];

  constructor(private repoService: RepoService) {}

  async ngOnInit() {
    this.repos = await this.repoService.getRepoJSON();
    this.categoryOptions = uniq(this.repos.map((repo) => repo['os-categories']).flat());
    this.trustOptions = uniq(this.repos.map((repo) => repo.trust_level));
    this.loading = false;
  }
}
