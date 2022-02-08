import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrainersPage } from './trainers/trainers.page';
import { LoginPage } from './login/login.page';
import { AuthGuard } from './guards/auth.guard';

// Pages:
// Login/Landingpage - check
// Trainer page -check 
// Catalouge page

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
 
  {
    path: 'trainer',
    component: TrainersPage,
    canActivate: [ AuthGuard ]
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
