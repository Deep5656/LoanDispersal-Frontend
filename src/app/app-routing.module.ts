import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path:'dashboard',
    component:UserComponent,
    pathMatch:'full',
  },
  {
    path:'userdashboard',
    component:UserDashboardComponent,
    pathMatch:'full',
  },
  {
    path:'updateuser/:id',
    component:UpdateUserComponent,
    pathMatch:'full',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
