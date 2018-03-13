import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../../components/user/user.component';

const userRoutes: Routes = [
    {
        path: 'user',
        children: [
            {
              path: 'index',
              component: UserComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule { }
