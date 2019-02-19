import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {BlogService} from '../shared/services/blog.service';
import {ListCommentService} from './shared/service/list-comment.service';

@Component({
  selector: 'app-detal-post',
  templateUrl: './detal-post.component.html',
  styleUrls: ['./detal-post.component.css']
})
export class DetalPostComponent implements OnInit {
  public comments: any;
  id: number;
  name: string;
  descript: string;

  constructor(private route: ActivatedRoute, private blogService: BlogService, private comServ: ListCommentService) {
  }

  ngOnInit() {
    this.comments = this.comServ.getComments();
    this.id = +this.route.snapshot.params['id'];
    this.blogService.getPostbyId(this.id).subscribe((postsnew: Params) => {
      this.name = postsnew['name'];
      this.descript = postsnew['description'];
    });
  }

  addCom(post) {
    // console.log(post);
    /* this.isVisible = false;*/
    setTimeout(() => {
      this.comments = this.comServ.getComments();
    }, 600);

  }

}
