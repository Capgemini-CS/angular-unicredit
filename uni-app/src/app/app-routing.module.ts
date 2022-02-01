import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MobilePhoneComponent } from './mobile-phone/mobile-phone.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  {
    path: "",
    component: MobilePhoneComponent
  },

  {
    path:"register-form",
    component: RegisterFormComponent
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
