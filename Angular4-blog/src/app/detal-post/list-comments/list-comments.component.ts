import {Component, Input, OnInit} from '@angular/core';
import {ListCommentService} from '../shared/service/list-comment.service';
import {Params} from '@angular/router';


@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit {

  comments: any;
 @Input() postIdpost: number;
 @Input() comment: any;

  constructor(private listComments: ListCommentService) {
  }

  ngOnInit() {
    this.comments = this.listComments.getComments();
  }


}
