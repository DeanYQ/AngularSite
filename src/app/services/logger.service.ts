import { Injectable } from '@angular/core';

const enum LogLevel {
    Debug,
    Info,
    Error
}

@Injectable()
export class Logger {

    Level: LogLevel = LogLevel.Debug;

    Debug(message: any) {
        if (this.Level <= LogLevel.Debug) {
            console.log(message);
        }
    }

    Info(message: any) {
        if (this.Level <= LogLevel.Info) {
            console.log(message);
        }
    }

    Error(message: any) {
        if (this.Level <= LogLevel.Error) {
            console.log(message);
        }
    }
}
