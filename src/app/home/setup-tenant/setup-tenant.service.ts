import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SetupTenantComponent } from './setup-tenant.component';

const localStorageTenantKey = 'c8yTenant';

@Injectable({
  providedIn: 'root'
})
export class SetupTenantService {
  constructor(private modal: BsModalService) {}

  async getTenantUrl() {
    const tenant = window.localStorage.getItem(localStorageTenantKey);
    if (tenant) {
      return tenant;
    }

    const modal = this.modal.show(SetupTenantComponent);

    const result = await modal.content?.result;

    if (result) {
      window.localStorage.setItem(localStorageTenantKey, result);
    }
    return result;
  }
}
