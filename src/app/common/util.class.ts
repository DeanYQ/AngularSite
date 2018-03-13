import { isNullOrUndefined } from 'util';

export class TypeEx {

}

export class StringX {
  static IsNullOrWhiteSpace(str: string): boolean {
    if (isNullOrUndefined(str)) {
      return true;
    }

    const trimmed = str.trim();
    if (trimmed === '') {
      return true;
    }
    return false;
  }
}

export class HtmlX {
  static TileBody(): void {
    HtmlX.TileBodyToWin();
    window.onresize = (e) => {
      HtmlX.TileBodyToWin();
    };
  }

  static TileBodyToWin(): void {
    const h = HtmlX.GetClientHeight();
    const w = HtmlX.GetClientWidth();
    const body = document.getElementsByTagName('body')[0];
    body.style.width = w.toString() + 'px';
    body.style.height = h.toString() + 'px';
  }

  static GetClientHeight(): number {
    return document.documentElement.clientHeight;
  }

  static GetClientWidth(): number {
    return document.documentElement.clientWidth;
  }
}

export class Guid {
  private str: string;

  constructor(str?: string) {
    this.str = str || Guid.getNewGUIDString();
  }

  private static getNewGUIDString(): string {
    // your favourite guid generation function could go here
    // ex: http://stackoverflow.com/a/8809472/188246
    return Guid.s4() + Guid.s4() + '-' + Guid.s4() + '-' + Guid.s4() + '-' + Guid.s4() + '-' + Guid.s4() + Guid.s4() + Guid.s4();
  }

  private static s4(): string {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  toString() {
    return this.str;
  }
}
