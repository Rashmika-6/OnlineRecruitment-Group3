import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { FirstComponent } from './component/first/first.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { ChangeComponent } from './component/change/change.component';
import { EmailComponent } from './component/email/email.component';
import { RoletypeComponent } from './component/roletype/roletype.component';
import { InterfaceComponent } from './component/interface/interface.component';
import { ContentComponent } from './component/content/content.component';
import { PostjobComponent } from './component/postjob/postjob.component';
import { Job4uComponent } from './component/job4u/job4u.component';
import { StudentComponent } from './component/student/student.component';
import { CollegeComponent } from './component/college/college.component';
import { CompanyComponent } from './component/company/company.component';
import { AdmindshboardComponent } from './component/admindshboard/admindshboard.component';
import { AdmindashboardEmployersComponent } from './component/admindashboard-employers/admindashboard-employers.component';
import { AdmindashboardGraduatesComponent } from './component/admindashboard-graduates/admindashboard-graduates.component';
import { AdmindashboardJobsComponent } from './component/admindashboard-jobs/admindashboard-jobs.component';
import { EmployeeDashboardComponent } from './component/employee-dashboard/employee-dashboard.component';
import { ContactComponent } from './component/contact/contact.component';
import { GraduateDashboardComponent } from './component/graduate-dashboard/graduate-dashboard.component';
import { InboxComponent } from './component/inbox/inbox.component';
import { OutboxComponent } from './component/outbox/outbox.component';
import { SearchComponent } from './component/search/search.component';
import { UpdatejobComponent } from './component/updatejob/updatejob.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'first', component: FirstComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'change', component: ChangeComponent },
  { path: 'email', component: EmailComponent },
  { path: 'roletype', component: RoletypeComponent },
  { path: 'interface/:id', component: InterfaceComponent },

  { path: 'content', component: ContentComponent },
  { path: 'postjob', component: PostjobComponent },
  { path: 'job4u', component: Job4uComponent },
  { path: 'student', component: StudentComponent },
  { path: 'college', component: CollegeComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'admin', component: AdmindshboardComponent },
  { path: 'adminEmployer', component: AdmindashboardEmployersComponent },
  { path: 'adminGraduate', component: AdmindashboardGraduatesComponent },
  { path: 'adminJob', component: AdmindashboardJobsComponent },
  { path: 'employer', component: EmployeeDashboardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'graduate', component: GraduateDashboardComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'outbox', component: OutboxComponent },
  { path: 'search', component: SearchComponent },
  { path: 'updatejob', component: UpdatejobComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
