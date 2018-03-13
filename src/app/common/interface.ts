// function interface
export type ICallback = (data: any) => void;

export class CallbackWrapper {
  private _target: any;
  private _func: Function;

  constructor(target: any, func: Function) {
    this._target = target;
    this._func = func;
  }

  public invoke(argArray?: any): void {
    this._func.apply(this._target, argArray);
  }
}

export function FuncBinder(target: any, func: Function): Function {
  return func.bind(target);
}

export interface ItemsResponse { results: string[]; }

export interface IObserver {
  Update(data?: any): void;
}

export interface IObserverSubject {
  Notify(data?: any): void;
  Attach(observer: IObserver): void;
  Detach(observer: IObserver): void;
}
