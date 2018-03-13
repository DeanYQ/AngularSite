import { Injectable } from '@angular/core';
import { Guid } from '../common/util.class';

@Injectable()
export class Session {

  private _session_id: string;
  public get Session_Id(): string {
    return this._session_id;
  }

  constructor() {
    this._session_id = new Guid().toString();
  }
}
