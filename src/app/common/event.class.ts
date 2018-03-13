import { IObserver, IObserverSubject } from './interface';
import { TypeEx } from './util.class';
import { isNullOrUndefined } from 'util';

// ** Event Args ** //
export class EventArgs {
    static readonly Empty: EventArgs;
}

export class DataEventArgs<T> extends EventArgs {

    private readonly data: T;
    get Data() {
        return this.data;
    }

    constructor(data: T) {
        super();
        this.data = data;
    }
}

// ** Event Handler ** //
export type EventHandler = (sender: any, args: EventArgs) => void;

export class EventObserver implements IObserver {

    constructor(
        private target: any,
        private handler: EventHandler) { }

    Update(args: EventArgs): void {
        this.handler(this.target, args);
    }
}

export class EventSubject implements IObserverSubject {

    constructor() {
        this.observers = [];
    }

    private observers: Array<IObserver>;

    Notify(args: EventArgs): void {
        if (!isNullOrUndefined(this.observers)) {
            this.observers.forEach(o => {
                o.Update(args);
            });
        }
    }

    Attach(observer: IObserver): void {
        this.observers.push(observer);
    }

    Detach(observer: IObserver): void {
        const index = this.observers.indexOf(observer);
        if (index >= 0) {
            const temp: Array<IObserver> = [];
            this.observers.forEach(o => {
                if (o !== observer) {
                    temp.push(o);
                }
            });
            this.observers = temp;
        }
    }
}
