import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../../components/account/signup/signup.component';
import { SigninComponent } from '../../components/account/signin/signin.component';
import { SignoutComponent } from '../../components/account/signout/signout.component';
import { ManageComponent } from '../../components/account/manage/manage.component';
import { ForgetPasswordComponent } from '../../components/account/forget-password/forget-password.component';
import { SignupCompletedComponent } from '../../components/account/signup-completed/signup-completed.component';
import { ActivateComponent } from '../../components/account/activate/activate.component';

// ** components ** //

// ** router **
const accountRoutes: Routes = [
  {
    path: 'account',
    children: [
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'signout',
        component: SignoutComponent
      },
      {
        path: 'forget-password',
        component: ForgetPasswordComponent
      },
      {
        path: 'signup-completed',
        component: SignupCompletedComponent
      },
      {
        path: 'activate',
        component: ActivateComponent
      },
      {
        path: 'manage/change-password',
        component: ManageComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(accountRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountRoutingModule { }
