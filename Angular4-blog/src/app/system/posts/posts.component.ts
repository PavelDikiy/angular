import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../shared/services/blog.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostModel} from './shared/models/post.model';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  form: FormGroup;
  posts: any;
  /*  isVisible = false;*/
  isVisible = 0;

  constructor(private blogServices: BlogService) {
  }

  ngOnInit() {
    this.posts = this.blogServices.getPosts2();

    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required])
    });
  }

  addPosts() {
    const formData = this.form.value;
    this.blogServices.addPost(formData.name, formData.description).subscribe(() => {
      this.form.reset();
      this.posts = this.blogServices.getPosts2();
    });
  }

  deletePosts(par: any) {
    this.blogServices.deletePost(par).subscribe(() => {
      this.posts = this.blogServices.getPosts2();
    });
  }

  editPoste(post) {
    /* this.isVisible = false;*/
    setTimeout(() => {
      this.posts = this.blogServices.getPosts2();
      this.isVisible = 0;
    }, 600);

  }

  isVisi(id: number) {
    if (this.isVisible < 1) {
      this.isVisible = id;
    } else {
      this.isVisible = 0;
    }

  }

}
