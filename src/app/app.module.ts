// ** Must ** //
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ** modules ** //
import { SharedModule } from './modules/shared.module';
import { CoreModule } from './modules/core.module';
import { HomeRoutingModule } from './modules/routes/home-routing.module';
import { AccountRoutingModule } from './modules/routes/account-routing.module';
import { AppRoutingModule } from './modules/routes/root-routing.module';
import { UserRoutingModule } from './modules/routes/user-routing.module';

// ** components ** //
import { AppComponent } from './app.component';
import { SignupComponent } from './components/account/signup/signup.component';
import { SigninComponent } from './components/account/signin/signin.component';
import { SignoutComponent } from './components/account/signout/signout.component';
import { HomeLayoutComponent } from './components/home/homeLayout.component';
import { HomeMainComponent } from './components/home/main/main.component';
import { HomeDownloadComponent } from './components/home/download/download.component';
import { HomeAboutComponent } from './components/home/about/about.component';
import { NotFoundComponent } from './components/misc/notFound/notFound.component';
import { UserComponent } from './components/user/user.component';
import { ManageComponent } from './components/account/manage/manage.component';
import { ForgetPasswordComponent } from './components/account/forget-password/forget-password.component';
import { ChartsComponent } from './components/home/charts/charts.component';
import { StackedAreaChartComponent } from './components/home/charts/stacked-area-chart/stacked-area-chart.component';

// ** service **
import { HttpX } from './services/httpx.service';
import { Auth } from './services/auth.service';
import { AuthInterceptor } from './services/auth-Interceptor.service';
import { BusyIndicatorComponent } from './components/control/busyIndicator/busy-indicator.component';
import { SignupCompletedComponent } from './components/account/signup-completed/signup-completed.component';
import { ActivateComponent } from './components/account/activate/activate.component';

// ** Echarts ** //
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [
    AppComponent,
    ActivateComponent,
    SignupComponent,
    SignupCompletedComponent,
    SigninComponent,
    SignoutComponent,
    ForgetPasswordComponent,
    ChartsComponent,
    StackedAreaChartComponent,
    HomeLayoutComponent,
    HomeMainComponent,
    HomeDownloadComponent,
    HomeAboutComponent,
    NotFoundComponent,
    BusyIndicatorComponent,
    UserComponent,
    ManageComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    HomeRoutingModule,
    AccountRoutingModule,
    UserRoutingModule,
    AppRoutingModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
