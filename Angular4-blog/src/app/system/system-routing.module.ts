import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {SystemComponent} from './system.component';
import {CommentsComponent} from './comments/comments.component';
import {PostsComponent} from './posts/posts.component';
import {AuthGuard} from '../shared/services/auth.guard';


const appRoutes: Routes = [
  {
    path: 'system', component: SystemComponent, canActivate: [AuthGuard], children: [
      {path: 'posts', component: PostsComponent},
      {path: 'comments', component: CommentsComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {
}
