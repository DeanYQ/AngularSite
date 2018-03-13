import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpX } from './httpx.service';
import { StatusInspector } from './status-inspector.service';
import { Logger } from './logger.service';
import { StringX } from '../common/util.class';
import 'rxjs/add/operator/toPromise';
import { CallbackWrapper, IObserverSubject } from '../common/interface';
import { EventSubject, DataEventArgs } from '../common/event.class';
import { Consts } from '../common/consts.class';
import { Session } from './session.service';
import { AccountService } from './account.service';

@Injectable()
export class Auth {

  private url = Consts.AuthBaseUrl;

  private _token: string;
  public get token(): string {
    return this._token;
  }

  private _authChangeSubject: IObserverSubject;
  public get AuthChangeSubject(): IObserverSubject {
    return this._authChangeSubject;
  }

  public get IsAuthenticated(): boolean {
    return !StringX.IsNullOrWhiteSpace(this.token);
  }

  constructor(
    private httpx: HttpX,
    private statusInpsector: StatusInspector,
    private accountService: AccountService,
    private session: Session,
    private log: Logger) {
    this._authChangeSubject = new EventSubject();
  }

  checkToken(): boolean {
    return true;
  }

  signup(uri: string, body, success, err): void {
    const route = this.url + uri;
    this.httpx.post(
      route,
      body,
      data => {
        if (success) {
          success(data);
        }
        this._token = data.body.Token;
      },
      error => {
        if (err) {
          let message = 'Unexpected error';
          if (error instanceof HttpErrorResponse) {
            message = error.statusText;
          }
          err(message);
        }
        this.handleError(error);
      });
  }

  signin(uri: string, body, success, err): void {
    this.postAuth(uri, body, success, err);
    this.onAuthChanged();
  }

  signout(): void {
    this._token = '';
    this.accountService.loginAccountName = '';
    this.onAuthChanged();
  }

  changePassword(uri: string, body, success, err): void {
    this.postAuth(uri, body, success, err);
  }

  getChaptcha(uri: string, success, err): void {
    const body = {
      session_id: this.session.Session_Id
    };
    this.postAuth(uri, body, success, err);
  }

  forgetPassword(uri: string, body, success, err): void {
    this.postAuth(uri, body, success, err);
  }

  activate(uri: string, token: string, success, err): void {
    const route = this.url + uri + '?token=' + token;
    this.httpx.get(
      route,
      data => {
        if (success) {
          success(data);
        }
        this._token = data.Token;
        this.onAuthChanged();
      },
      error => {
        if (err) {
          let message = 'Unexpected error';
          if (error instanceof HttpErrorResponse) {
            message = error.statusText;
          }
          err(message);
        }
        this.handleError(error);
      });
  }

  private onAuthChanged(): void {
    this.AuthChangeSubject.Notify(new DataEventArgs(this.IsAuthenticated));
  }

  private handleError(err: any): void {
    this.log.Error(err);
    this.statusInpsector.IsBusy = false;
  }

  private postAuth(uri: string, body, success, err): void {
    const route = this.url + uri;
    this.httpx.post(
      route,
      body,
      data => {
        if (success) {
          success(data);
        }
        this._token = data.body.Token;
      },
      error => {
        if (err) {
          let message = 'Unexpected error';
          if (error instanceof HttpErrorResponse) {
            message = error.statusText;
          }
          err(message);
        }
        this.handleError(error);
      });
  }
}
