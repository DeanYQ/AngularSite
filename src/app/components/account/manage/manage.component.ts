import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material';
import { SharedModule } from '../../../modules/shared.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { valdiatePassword } from '../../../common/validation.class';
import { HtmlX, StringX } from '../../../common/util.class';
import { Router } from '@angular/router';
import { Auth } from '../../../services/auth.service';
import { FuncBinder } from '../../../common/interface';
import { StatusInspector } from '../../../services/status-inspector.service';
import { MessageSnack } from '../../../services/snack-tip.service';
import { ChangePasswordDto } from '../../../common/model.class';
import { AccountService } from '../../../services/account.service';
import { isNullOrUndefined } from 'util';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.css']
})
export class ManageComponent {
    changePasswordForm: FormGroup;

    constructor(
      private router: Router,
      private accountService: AccountService,
      private auth: Auth,
      private snack: MessageSnack,
      private status: StatusInspector,
      private fb: FormBuilder) {
      this.changePasswordForm = this.fb.group({
        originalPasswordCtrl: ['', [Validators.required, valdiatePassword]],
        newPasswordCtrl: ['', [Validators.required, valdiatePassword]],
        comfirmNewPasswordCtrl: ['', [Validators.required, valdiatePassword]]
      });

      this.IsAuthenticated = this.auth.IsAuthenticated;
      HtmlX.TileBody();
    }

    IsAuthenticated = false;
    changePassword(): void {
      if (this.changePasswordForm.get('originalPasswordCtrl').errors) {
        this.snack.show('Not input correct the orginal password.');
        return;
      }

      if (StringX.IsNullOrWhiteSpace(this.accountService.loginAccountName)) {
        this.snack.show('Please login first.');
        return;
      }
      const dto = new ChangePasswordDto();
      dto.AccountName = this.accountService.loginAccountName;
      dto.OriginalPassword = this.changePasswordForm.get('originalPasswordCtrl').value;
      dto.NewPassword = this.changePasswordForm.get('newPasswordCtrl').value;
      dto.ConfirmNewPassword = this.changePasswordForm.get('comfirmNewPasswordCtrl').value;

      if (dto.NewPassword !== dto.ConfirmNewPassword) {
        this.snack.show('New passwords are not mismatch.');
        return;
      }

      this.status.IsBusy = true;
      this.auth.changePassword('auth/changepassword', dto, FuncBinder(this, this.onSuccess), FuncBinder(this, this.onError));
    }

    onSuccess(response: any): void {
      this.status.IsBusy = false;
      this.snack.show('Change password successfully!');
    }

    onError(error: string): void {
      this.status.IsBusy = false;
      this.snack.show(error);
    }
}
