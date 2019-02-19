import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

import {NotFoundComponent} from './not-found/not-found.component';
import {SystemComponent} from './system/system.component';

import {DetalPostComponent} from './detal-post/detal-post.component';
import {ListPageComponent} from './list-page/list-page.component';
import {AuthComponent} from './auth/auth.component';

const appRoutes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: '', component: HomeComponent},
  {path: 'posts', component: ListPageComponent},
  {path: 'posts/:id', component: DetalPostComponent},
  {path: 'system', component: SystemComponent},
  /*  {path: '**', redirectTo: '/' pathMatch: 'full'},*/
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
