import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { ICallback } from '../common/interface';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { isNullOrUndefined } from 'util';
import { Logger } from './logger.service';

@Injectable()
export class HttpX {

    constructor(
        private http: HttpClient,
        private log: Logger
    ) { }

    get(url: string, callback: ICallback, errCallback?: ICallback): void {
        this.http.get(url).subscribe(
            data => {
                if (callback) {
                    callback(data);
                }
            },
            (err: HttpErrorResponse) => {
                if (errCallback) {
                    errCallback(err);
                }

                if (err.error instanceof Error) {
                    // client side or network error occured, handle it accordingly.
                } else {
                    this.log.Debug(`Backend returned code ${err.status}, body was: ${err.error}`);
                }
            }
        );
    }

    getFile(url: string, callback: ICallback, errCallback?: ICallback): void {
        this.http.get(url, { responseType: 'text' }).subscribe(
            content => {
                // the data will be the file content other than the file object.
                console.log(content);
                if (callback) {
                    callback(content);
                }
            },
            (err: HttpErrorResponse) => {
                if (errCallback) {
                    errCallback(err);
                }

                if (err.error instanceof Error) {
                    // client side or network error occured, handle it accordingly.
                } else {
                    this.log.Debug(`Backend returned code ${err.status}, body was: ${err.error}`);
                }
            }
        );
    }

    post(url: string, body: any, callback: ICallback, errCallback?: ICallback): void {
        this.http.post(url, body, { observe: 'response' }).subscribe(
            resp => {
                if (callback) {
                    callback(resp);
                }
            },
            (err: HttpErrorResponse) => {
                if (!isNullOrUndefined(errCallback)) {
                    errCallback(err);
                }

                if (err.error instanceof Error) {
                    // client side or network error occured, handle it accordingly.
                } else {
                    // TODO:
                    this.log.Debug(`Backend returned code ${err.status}, body was: ${err.error}`);
                }
            }
        );
    }
}
