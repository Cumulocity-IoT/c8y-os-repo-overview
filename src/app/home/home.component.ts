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
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RepoEntry } from './repo.type';
import { RepoFilterPipe } from './repo-filter.pipe';
import { FormsModule } from '@angular/forms';
import { uniq } from 'lodash-es';
import { SetupTenantService } from './setup-tenant/setup-tenant.service';
import { filter } from 'rxjs/operators';
import { SupportedIcons } from '@c8y/ngx-components/icon-selector/icons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { A11yModule } from '@angular/cdk/a11y';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

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
    BsDropdownModule,
    TooltipModule,
    A11yModule,
  ],
})
export class HomeComponent implements OnInit {
  loading = true;
  repos: RepoEntry[] = [];
  listClass: any;
  searchText = '';
  selectedCategories: string[] = [];
  categoryOptions: string[] = [];
  trust: RepoEntry['trust_level'][] = [];
  trustOptions: {
    label: string;
    icon: SupportedIcons;
    trustLevels: RepoEntry['trust_level'][];
    iconClass: string;
  }[] = [
    {
      label: 'Trusted & Official',
      icon: 'c8y-shield',
      iconClass: 'text-info',
      trustLevels: ['Trusted', 'Official'],
    },
    {
      label: 'Official',
      icon: 'shield',
      iconClass: 'text-success',
      trustLevels: ['Official'],
    },
    {
      label: 'Trusted, Official & Unofficial',
      icon: 'warning-shield',
      iconClass: 'text-warning',
      trustLevels: ['Trusted', 'Official', 'Unofficial'],
    },
  ];
  showInstallButton = false;

  constructor(
    private repoService: RepoService,
    private activatedRoute: ActivatedRoute,
    private setupTenant: SetupTenantService,
    private router: Router
  ) {
    this.trust = this.trustOptions[0].trustLevels;
    this.activatedRoute.params
      .pipe(filter((params) => !!params['org'] && !!params['repo']))
      .subscribe(({ org, repo }) => {
        this.redirectForInstallation(org, repo);
      });

    const urlParams = new URLSearchParams(window.location.search);
    const showInstallButtonValue = urlParams.get('showInstallButton');
    this.showInstallButton = showInstallButtonValue === 'true';
  }

  async ngOnInit() {
    this.repos = await this.repoService.getRepoJSON();
    this.categoryOptions = uniq(
      this.repos.map((repo) => repo['os-categories']).flat()
    ).sort((a, b) => a.localeCompare(b));
    this.selectedCategories = [...this.categoryOptions];
    this.loading = false;
  }

  deselectCategory(category: string) {
    this.selectedCategories = this.selectedCategories.filter(
      (selectedCategory) => selectedCategory !== category
    );
  }

  toggleCategory(category: string) {
    if (this.selectedCategories.includes(category)) {
      this.deselectCategory(category);
    } else {
      this.selectedCategories = [...this.selectedCategories, category];
    }
  }

  toggleAllCategories() {
    if (this.selectedCategories.length === this.categoryOptions.length) {
      this.selectedCategories = [];
    } else {
      this.selectedCategories = [...this.categoryOptions];
    }
  }

  private async redirectForInstallation(org: string, repo: string) {
    try {
      const tenant = await this.setupTenant.getTenantUrl();
      window.location.href = `${tenant}/apps/administration/index.html?installOrg=${org}&installRepo=${repo}`;
    } catch {
      this.router.navigate(['/']);
      return;
    }
  }
}
