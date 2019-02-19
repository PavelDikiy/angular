import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthComponent} from './auth.component';


const appRoutes2: Routes = [
  {
    path: 'auth', component: AuthComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'registration', component: RegistrationComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(appRoutes2)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
