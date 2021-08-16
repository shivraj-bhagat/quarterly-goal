import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './baselayout-week3/home/home.component';
import { Week3Component } from './baselayout-week3/week3/week3.component';
import { HomePageComponent } from './week4/baselayout/home-page/home-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'week3',
        component: Week3Component
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
