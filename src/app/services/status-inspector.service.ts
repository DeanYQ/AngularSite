import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { EventSubject, EventHandler, DataEventArgs } from '../common/event.class';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StatusInspector {

  constructor() {
    this.isBusy = false;
  }

  private isBusy: boolean;
  get IsBusy(): boolean {
    return this.isBusy;
  }
  set IsBusy(value: boolean) {
    if (value !== this.isBusy) {
      this.isBusy = value;
      this.onIsBusyChanged(value);
    }
  }
  IsBusyEventSubject = new EventSubject();

  private onIsBusyChanged(isbusy: boolean): void {
    this.IsBusyEventSubject.Notify(new DataEventArgs(isbusy));
  }
}
