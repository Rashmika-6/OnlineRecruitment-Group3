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

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'first', component: FirstComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'change', component: ChangeComponent },
  { path: 'email', component: EmailComponent },
  { path: 'roletype', component: RoletypeComponent },
  { path: 'interface', component: InterfaceComponent },
  {path:'content',component:ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
