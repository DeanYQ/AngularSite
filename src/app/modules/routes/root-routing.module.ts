import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ** components ** //
import { HomeLayoutComponent } from '../../components/home/homeLayout.component';
import { HomeMainComponent } from '../../components/home/main/main.component';
import { HomeDownloadComponent } from '../../components/home/download/download.component';
import { HomeAboutComponent } from '../../components/home/about/about.component';
import { NotFoundComponent } from '../../components/misc/notFound/notFound.component';
import { AppComponent } from '../../app.component';

// ** router **
const appRoutes: Routes = [
    {
      path: 'index',
      redirectTo: '/home/index',
      pathMatch: 'full'
    },
    {
      path: '',
      redirectTo: '/home/index',
      pathMatch: 'full'
    },
    { path: '**', component: NotFoundComponent }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
