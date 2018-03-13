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
import { MatInputModule } from '@angular/material';
import { SharedModule } from '../../modules/shared.module';
import { HttpX } from '../../services/httpx.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BusyIndicatorComponent } from '../control/busyIndicator/busy-indicator.component';
import { Auth } from '../../services/auth.service';
import { EventObserver, EventArgs, DataEventArgs } from '../../common/event.class';
import { IObserver } from '../../common/interface';
import { AccountService } from '../../services/account.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home-layout',
  templateUrl: './homeLayout.component.html',
  styleUrls: ['./homeLayout.component.css']
})
export class HomeLayoutComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private auth: Auth) {
    this.authObserver = new EventObserver(this, this.onAuthenticationChanged);
    this.auth.AuthChangeSubject.Attach(this.authObserver);
    this.IsAuthenticated = this.auth.IsAuthenticated;
    if (this.IsAuthenticated) {
      this.loginAccountName = this.accountService.loginAccountName;
    }
  }

  authObserver: IObserver;

  IsAuthenticated = false;

  loginAccountName = this.accountService.loginAccountName;

  home(): void {
    this.router.navigate(['index']);
  }

  signin(): void {
    this.router.navigate(['account/signin']);
  }

  signout(): void {
    this.auth.signout();
    this.router.navigate(['home/index']);
  }

  navigateToManagementPage(): void {
    this.router.navigate(['account/manage/change-password']);
  }

  navigateToCharts(): void {
    this.router.navigate(['home/charts']);
  }

  onAuthenticationChanged(o: any, args: DataEventArgs<boolean>): void {
    if (args !== null) {
      o.IsAuthenticated = args.Data;
    }
  }
}
