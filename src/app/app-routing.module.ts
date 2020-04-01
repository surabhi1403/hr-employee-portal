import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { SignupComponent } from './containers/signup/signup.component';
import { AdminComponent } from './containers/admin/admin.component';
import { EmployeeComponent } from './containers/employee/employee.component';


const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'employee',component:EmployeeComponent },
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdminComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
