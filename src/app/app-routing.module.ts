import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReimbursementsComponent } from './components/reimbursements/reimbursements.component';
import { NewReimbursementComponent } from './components/new-reimbursement/new-reimbursement.component';
import { MasterDashboardComponent } from './components/master-dashboard/master-dashboard.component';
import { ManagerViewReimbursementsComponent } from './components/manager-view-reimbursements/manager-view-reimbursements.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'reimbursements',
    component: ReimbursementsComponent
  },
  {
    path: 'new-reimbursement',
    component: NewReimbursementComponent
  },
  {
    path: 'master-dashboard',
    component: MasterDashboardComponent
  },
  {
    path: 'manager-view-reimbursements',
    component: ManagerViewReimbursementsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
