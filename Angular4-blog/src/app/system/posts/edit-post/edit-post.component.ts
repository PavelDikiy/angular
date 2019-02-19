import {Component, EventEmitter, Output, OnInit, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BlogService} from '../../../shared/services/blog.service';
import {PostModel} from '../shared/models/post.model';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  form: FormGroup;
  posts: any;

  @Input() arrpost: PostModel;
  @Output() onEditPost = new EventEmitter<PostModel>();

  constructor(private blogServices: BlogService) {
  }


  ngOnInit() {

    this.form = new FormGroup({
      'name': new FormControl(this.arrpost.name, [Validators.required]),
      'description': new FormControl(this.arrpost.description, [Validators.required])
    });

  }

  editPosts() {
    const formData = this.form.value;
    /*console.log(formData.name, formData.description, this.arrpost.id);*/
    this.blogServices.changePost(formData, this.arrpost.id).subscribe(() => {
      this.posts = this.blogServices.getPosts2();
    });
    this.onEditPost.emit({name: formData.name, description: formData.description, id: this.arrpost.id});

  }

}
