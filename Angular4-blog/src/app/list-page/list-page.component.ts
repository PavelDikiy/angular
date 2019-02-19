import { Component, OnInit } from '@angular/core';
import {BlogService} from '../shared/services/blog.service';

/*interface Postsf {
  title: string;
  description: string;
  id: number;
}*/

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  posts: any;

  constructor(private blogServices: BlogService) {
  }

  ngOnInit() {
    /*  this.blogServices.getPosts().subscribe((postsnew: Postsf[]) => {
        this.posts = postsnew;
      });*/
    this.posts = this.blogServices.getPosts2();
  }


}
