import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ListCommentService} from '../shared/service/list-comment.service';
import {PostModel} from '../../system/posts/shared/models/post.model';
import {CommentsModel} from '../shared/models/comments.model';


@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrls: ['./add-comments.component.css']
})
export class AddCommentsComponent implements OnInit {
  form: FormGroup;
  comments: any;
  @Input() postIdpost1: number;
  @Output() onAddCom = new EventEmitter<CommentsModel>();

  constructor(private listComments: ListCommentService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'body': new FormControl(null, [Validators.required])
    });
  }

  addComments() {
    const formData = this.form.value;
    this.listComments.addComments(formData, this.postIdpost1).subscribe(() => {
      this.comments = this.listComments.getComments();
      this.form.reset();
    });
    this.onAddCom.emit({name: formData.name, body: formData.body, postId: this.postIdpost1});
  }
}
