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
import { ValidationErrors } from '@angular/forms/src/directives/validators';
import { valdiatePassword } from '../../../common/validation.class';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Auth } from '../../../services/auth.service';
import { ViewChild } from '@angular/core/src/metadata/di';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { AccountRoutingModule } from '../../../modules/routes/account-routing.module';
import { AccountModel } from '../../../common/model.class';
import { MessageSnack } from '../../../services/snack-tip.service';
import { CallbackWrapper, FuncBinder } from '../../../common/interface';
import { HtmlX } from '../../../common/util.class';
import { AccountService } from '../../../services/account.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  email: string;
  password: string;
  signinForm: FormGroup;
  formHeight: number;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private auth: Auth,
    private snack: MessageSnack,
    private status: StatusInspector) {
    this.signinForm = this.fb.group({
      emailCtrl: ['', [Validators.required, Validators.email]],
      pwdCtrl: ['', [Validators.required, valdiatePassword]],
    });
    HtmlX.TileBody();
  }

  signin(): void {

    if (this.signinForm.get('emailCtrl').errors) {
      this.snack.show('Not input correct email');
      return;
    }

    if (this.signinForm.get('pwdCtrl').errors) {
      this.snack.show('Not input correct password');
      return;
    }

    const model = new AccountModel();
    model.Account = this.signinForm.get('emailCtrl').value;
    model.Password = this.signinForm.get('pwdCtrl').value;
    this.status.IsBusy = true;
    this.auth.signin('auth/signin', model, FuncBinder(this, this.onSuccess), FuncBinder(this, this.onError));
  }

  onSuccess(response: any): void {
    this.status.IsBusy = false;
    this.accountService.loginAccountName = this.signinForm.get('emailCtrl').value;
    this.router.navigate(['index']);
  }

  onError(error: string): void {
    this.status.IsBusy = false;
    this.snack.show(error);
  }
}
