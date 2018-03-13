export class CookieUtil {
    static getCookie(name: string): string {
        if (document.cookie.length > 0) {
            let start = document.cookie.indexOf(name + '=');
            if (start !== -1) {
                start = start + name.length + 1;
                let end = document.cookie.indexOf(';', start);
                if (end === -1) {
                    end = document.cookie.length;
                }
                return decodeURI(document.cookie.substring(start, end));
            }
        }
    }

    static setCookie(name: string, value: string, expiredays: number): void {
        const exp = new Date();
        exp.setTime(exp.getTime() + expiredays * 24 * 60 * 60 * 1000);
        document.cookie = name + '=' + encodeURI(value) + '; expires=' + exp.toUTCString();
    }
}
