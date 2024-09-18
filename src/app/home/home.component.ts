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
  ],
})
export class HomeComponent implements OnInit {
  loading = true;
  repos: RepoEntry[] = [];
  listClass: any;

  constructor(private repoService: RepoService) {}

  async ngOnInit() {
    this.repos = await this.repoService.getRepoJSON();
    this.loading = false;
  }
}
