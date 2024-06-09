import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './component/first/first.component';
import { LoginComponent } from './component/login/login.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { HeaderComponent } from './component/header/header.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { ChangeComponent } from './component/change/change.component';
import { EmailComponent } from './component/email/email.component';
import { RoletypeComponent } from './component/roletype/roletype.component';
import { InterfaceComponent } from './component/interface/interface.component';
import { ContentComponent } from './component/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { PostjobComponent } from './component/postjob/postjob.component';
import { Job4uComponent } from './component/job4u/job4u.component';
import { StudentComponent } from './component/student/student.component';
import { CollegeComponent } from './component/college/college.component';
import { CompanyComponent } from './component/company/company.component';

import { AdmindshboardComponent } from './component/admindshboard/admindshboard.component';
import { AdmindashboardEmployersComponent } from './component/admindashboard-employers/admindashboard-employers.component';
import { AdmindashboardJobsComponent } from './component/admindashboard-jobs/admindashboard-jobs.component';
import { AdmindashboardGraduatesComponent } from './component/admindashboard-graduates/admindashboard-graduates.component';
import { EmployeeDashboardComponent } from './component/employee-dashboard/employee-dashboard.component';
import { ContactComponent } from './component/contact/contact.component';
import { GraduateDashboardComponent } from './component/graduate-dashboard/graduate-dashboard.component';
import { InboxComponent } from './component/inbox/inbox.component';
import { OutboxComponent } from './component/outbox/outbox.component';
import { SearchComponent } from './component/search/search.component';
import { UpdatejobComponent } from './component/updatejob/updatejob.component';



@NgModule({
  declarations: [
    FirstComponent,
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    HeaderComponent,
    ForgotComponent,
    ChangeComponent,
    EmailComponent,
    RoletypeComponent,
    InterfaceComponent,
    ContentComponent,
    PostjobComponent,
    Job4uComponent,
    StudentComponent,
    CollegeComponent,
    CompanyComponent,
    
    AdmindshboardComponent,
          AdmindashboardEmployersComponent,
    AdmindashboardJobsComponent,
          AdmindashboardGraduatesComponent,
          EmployeeDashboardComponent,
          ContactComponent,
          GraduateDashboardComponent,
          InboxComponent,
          OutboxComponent,
          SearchComponent,
          UpdatejobComponent
          
  ], //logical grouping of components
  imports: [
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, //to recognize respective directory
  ],
  providers: [],
  bootstrap: [AppComponent], //starting point components
})
export class AppModule {}
