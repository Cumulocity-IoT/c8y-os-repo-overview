import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CoreModule,
  BootstrapComponent,
  RouterModule,
} from '@c8y/ngx-components';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'install/:org/:repo',
        component: HomeComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
    ]),
    CoreModule.forRoot(),
  ],
  bootstrap: [BootstrapComponent],
})
export class AppModule {}
