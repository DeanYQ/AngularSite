import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  FormGroupDirective,
  NgForm
} from '@angular/forms';
import { StatusInspector } from '../../../services/status-inspector.service';
import { AbstractControl } from '@angular/forms/src/model';
import { valdiatePassword } from '../../../common/validation.class';
import { Auth } from '../../../services/auth.service';
import { AccountModel } from '../../../common/model.class';
import { MessageSnack } from '../../../services/snack-tip.service';
import { CallbackWrapper, FuncBinder } from '../../../common/interface';
import { HtmlX } from '../../../common/util.class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  email: string;
  fpForm: FormGroup;
  hasChecked: boolean;

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private snack: MessageSnack,
    private status: StatusInspector) {

    this.hasChecked = false;
    this.fpForm = this.fb.group({
      emailCtrl: ['', [Validators.required, Validators.email]],
    });
    HtmlX.TileBody();
  }

  continue(): void {

    if (this.fpForm.get('emailCtrl').errors) {
      this.snack.show('Not input correct email');
      return;
    }

    const model = new AccountModel();
    model.Account = this.fpForm.get('emailCtrl').value;
    this.status.IsBusy = true;
    this.auth.signin('auth/forget-password', model, FuncBinder(this, this.onSuccess), FuncBinder(this, this.onError));
  }

  onSuccess(response: any): void {
    this.hasChecked = true;
    this.status.IsBusy = false;
  }

  onError(error: string): void {
    this.status.IsBusy = false;
    this.snack.show(error);
  }
}
