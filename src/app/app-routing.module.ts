import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrainersPage } from './trainers/trainers.page';
import { LoginPage } from './login/login.page';

// Pages:
// Login/Landingpage
//Trainer page
//Catalouge page

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
 
  {
    path: 'trainer',
    component: TrainersPage,
  },
  {
    path:'login',
    component:LoginPage
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
