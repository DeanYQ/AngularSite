import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// ** service **
import { HttpX } from '../services/httpx.service';
import { Auth } from '../services/auth.service';
import { AuthInterceptor } from '../services/auth-Interceptor.service';
import { StatusInspector } from '../services/status-inspector.service';
import { Logger } from '../services/logger.service';
import { MessageSnack } from '../services/snack-tip.service';
import { Session } from '../services/session.service';
import { AccountService } from '../services/account.service';

@NgModule({
    imports: [],
    exports: [],
    providers: [
        AccountService,
        HttpX,
        StatusInspector,
        Logger,
        MessageSnack,
        Session,
        Auth,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        }],
})
export class CoreModule { }
