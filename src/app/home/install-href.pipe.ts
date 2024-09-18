import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RepoService } from './repo.service';
import { RepoEntry } from './repo.type';

@Pipe({
  name: 'installHref',
  standalone: true,
})
export class InstallHrefPipe implements PipeTransform {
  constructor(private repoService: RepoService) {}
  transform(repo: RepoEntry): Observable<string | false> {
    if (!this.repoService.isInstallable(repo)) {
      return of(false);
    }

    return of(false);
  }
}
