import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroupComponent, ModalModule } from '@c8y/ngx-components';

@Component({
  selector: 'app-setup-tenant',
  templateUrl: './setup-tenant.component.html',
  standalone: true,
  imports: [ModalModule, FormsModule, FormGroupComponent],
})
export class SetupTenantComponent {
  result: Promise<string> = new Promise<string>((resolve, reject) => {
    this._save = resolve;
    this._reject = reject;
  });
  private _save: ((arg: string) => void) | undefined;
  private _reject: (() => void) | undefined;

  tenant = '';

  save() {
    if (this._save) {
      this._save(this.tenant);
    }
  }

  cancel() {
    if (this._reject) {
      this._reject();
    }
  }
}
