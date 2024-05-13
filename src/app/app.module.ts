import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
      CompanyComponent
      
      
  ], //logical grouping of components
  imports: [
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
