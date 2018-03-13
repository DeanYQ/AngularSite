import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from '../../components/home/main/main.component';
import { HomeDownloadComponent } from '../../components/home/download/download.component';
import { HomeAboutComponent } from '../../components/home/about/about.component';
import { HomeLayoutComponent } from '../../components/home/homeLayout.component';
import { ChartsComponent } from '../../components/home/charts/charts.component';
import { StackedAreaChartComponent } from '../../components/home/charts/stacked-area-chart/stacked-area-chart.component';
// ** components ** //

// ** router **
const homeRoutes: Routes = [
    {
        path: 'home',
        component: HomeLayoutComponent,
        children: [
            {
                path: 'index',
                component: HomeMainComponent
            },
            {
                path: 'download',
                component: HomeDownloadComponent
            },
            {
                path: 'about',
                component: HomeAboutComponent
            },
            {
                path: 'charts',
                component: ChartsComponent
            },
            {
                path: 'charts/stacked-area-chart',
                component: StackedAreaChartComponent
            },
            {
                path: '',
                redirectTo: 'index',
                pathMatch: 'full'
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule { }
