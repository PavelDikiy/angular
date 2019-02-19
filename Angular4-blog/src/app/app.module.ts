import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BlogService} from './shared/services/blog.service';
import {HttpModule} from '@angular/http';


import {NotFoundComponent} from './not-found/not-found.component';
import {AuthService} from './shared/services/auth.service';
import {DetalPostComponent} from './detal-post/detal-post.component';
import {ListPageComponent} from './list-page/list-page.component';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {UsersService} from './shared/services/users.service';
import {SystemModule} from './system/system.module';
import {AuthGuard} from './shared/services/auth.guard';
import { AddCommentsComponent } from './detal-post/add-comments/add-comments.component';
import { ListCommentsComponent } from './detal-post/list-comments/list-comments.component';
import {ListCommentService} from './detal-post/shared/service/list-comment.service';
import {SharedModule} from './shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    NotFoundComponent,
    DetalPostComponent,
    ListPageComponent,
    AddCommentsComponent,
    ListCommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthModule,
    SystemModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [BlogService, UsersService, AuthService, AuthGuard, ListCommentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
