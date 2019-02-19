import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {SystemRoutingModule} from './system-routing.module';
import {SystemComponent} from './system.component';
import {PostsComponent} from './posts/posts.component';
import {CommentsComponent} from './comments/comments.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';


@NgModule({

  imports: [CommonModule, SharedModule, SystemRoutingModule],
  declarations: [SystemComponent, PostsComponent, CommentsComponent, EditPostComponent]
})

export class SystemModule {
}
