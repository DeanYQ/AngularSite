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
import { ValidationErrors } from '@angular/forms/src/directives/validators';
import { SharedModule } from '../../../modules/shared.module';
import { MatErrorStateMatcher } from '../../../common/matErrorStateMatcher.module';
import { StatusInspector } from '../../../services/status-inspector.service';
import { valdiatePassword } from '../../../common/validation.class';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AccountModel } from '../../../common/model.class';
import { Auth } from '../../../services/auth.service';
import { FuncBinder } from '../../../common/interface';
import { MessageSnack } from '../../../services/snack-tip.service';
import { HtmlX } from '../../../common/util.class';
import { AccountService } from '../../../services/account.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // form
  signupForm: FormGroup;
  IsChaptchaGot = false;

  constructor(
    private accountService: AccountService,
    private fb: FormBuilder,
    private router: Router,
    private auth: Auth,
    private snack: MessageSnack,
    private status: StatusInspector) {
    this.signupForm = this.fb.group({
      emailCtrl: ['', [Validators.required, Validators.email]],
      pwdCtrl: ['', [Validators.required, valdiatePassword]],
      pwd2Ctrl: ['', [Validators.required, valdiatePassword]],
      chaptchaCtrl: ['', [Validators.required]]
    });

    HtmlX.TileBody();
    this.getChaptcha();
  }

  signup(): void {
    const pwd1 = this.signupForm.get('pwdCtrl').value;
    const pwd2 = this.signupForm.get('pwd2Ctrl').value;
    const chaptcha = this.signupForm.get('chaptchaCtrl').value;

    if (this.signupForm.get('emailCtrl').errors) {
      this.snack.show('Not input correct email');
      return;
    }

    if (this.signupForm.get('chaptchaCtrl').errors) {
      this.snack.show('Chaptcha is required');
      return;
    }

    if (this.signupForm.get('pwdCtrl').errors || this.signupForm.get('pwd2Ctrl').errors) {
      this.snack.show('Not input correct password');
      return;
    }

    if (pwd1 !== pwd2) {
      this.snack.show('The input passwords are Inconsistent!');
      return;
    }

    const model = new AccountModel();
    model.Account = this.signupForm.get('emailCtrl').value;
    model.Password = pwd1;
    model.Password2 = pwd2;
    model.Chaptcha = chaptcha;
    this.status.IsBusy = true;
    this.auth.signup('auth/signup', model, FuncBinder(this, this.onSuccess), FuncBinder(this, this.onError));
  }

  getChaptcha(): void {
    this.auth.getChaptcha('res/captcha/get', FuncBinder(this, this.onGetCaptchaSuccess), FuncBinder(this, this.onGetCaptchaError));
  }

  onSuccess(response: any): void {
    this.status.IsBusy = false;
    this.accountService.loginAccountName = this.signupForm.get('emailCtrl').value;
    this.router.navigate(['account/signup-completed']);
  }

  onError(error: string): void {
    this.status.IsBusy = false;
    this.snack.show(error);
  }

  onGetCaptchaSuccess(response: any): void {
    const imgBuffer = response.body.Content;
    const testImg = document.getElementById('chaptcha') as HTMLImageElement;
    testImg.src = 'data:image/png;base64,' + imgBuffer;
    this.IsChaptchaGot = true;
  }

  onGetCaptchaError(error: string): void {
    this.snack.show(error);
    this.IsChaptchaGot = false;
  }
}
