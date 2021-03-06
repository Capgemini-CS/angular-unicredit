import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MobilePhoneComponent } from './mobile-phone/mobile-phone.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "mobile-phone",
    component: MobilePhoneComponent
  },

  {
    path:"register-form",
    component: RegisterFormComponent
  },

  {
    path:"login",
    component: LoginComponent
  },

  {
    path:"contact-form",
    component: ContactFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
