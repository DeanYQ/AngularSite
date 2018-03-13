import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AfterViewInit, ViewChild } from '@angular/core';
import { Auth } from '../../../services/auth.service';
import { StatusInspector } from '../../../services/status-inspector.service';
import { FuncBinder } from '../../../common/interface';
import { StringX } from '../../../common/util.class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private auth: Auth,
    private status: StatusInspector
  ) { }

  seconds = 20;
  StatusMessage = 'The system is verifying your account. Please wait a moment.';
  ButtonMessage = 'Navigate to the home page';
  IsAuthenticated = false;
  ngOnInit() { this.activate(); }

  private activate() {
    this.activateRoute.queryParams.subscribe(queryParams => {
      const token = queryParams.token;
      if (StringX.IsNullOrWhiteSpace(token)) {
        this.StatusMessage = 'Invalid link address to activate the account.';
      } else {
        this.status.IsBusy = true;
        this.auth.activate('auth/activate', token, FuncBinder(this, this.onSuccess), FuncBinder(this, this.onError));
      }
    });
  }

  onSuccess(response: any): void {
    this.status.IsBusy = false;
    this.IsAuthenticated = true;
    this.StatusMessage = 'Congratulations, Active your account successfully!';
    this.countDown();
  }

  onError(error: string): void {
    this.status.IsBusy = false;
    this.StatusMessage = error;
    this.countDown();
  }

  private countDown() {
    window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.ButtonMessage = 'Navigate to the home page';
        this.DoNavigation();
      } else {
        if (this.seconds < 0) { this.seconds = 10; } // reset
        this.ButtonMessage = `Navigate to the home page (${this.seconds})`;
      }
    }, 1000);
  }

  DoNavigation(): void {
    this.router.navigate(['index']);
  }
}
