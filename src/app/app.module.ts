
// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ParticlesModule } from 'angular-particle';

// routing
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingComponent } from './components/landing/landing.component';

// services
import { UserService } from './services/user.service';
import { ReimbursementsComponent } from './components/reimbursements/reimbursements.component';
import { NewReimbursementComponent } from './components/new-reimbursement/new-reimbursement.component';
import { ReimbursementService } from './services/reimbursement.service';
import { MasterDashboardComponent } from './components/master-dashboard/master-dashboard.component';
import { ManagerViewReimbursementsComponent } from './components/manager-view-reimbursements/manager-view-reimbursements.component';
import { FilterPipePipe } from './filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavComponent,
    RegisterComponent,
    LandingComponent,
    ReimbursementsComponent,
    NewReimbursementComponent,
    MasterDashboardComponent,
    ManagerViewReimbursementsComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ParticlesModule
  ],
  providers: [UserService, ReimbursementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
