import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class ListCommentService {
  constructor(private http: Http) {
  }

  getComments() {
    return this.http.get('http://localhost:3000/comments')
      .map((response: Response) => response.json());
  }

  addComments(arrComent: any, idpost: number) {
    const data = {
      name: arrComent.name,
      body: arrComent.body,
      postId: idpost
    };
    return this.http.post('http://localhost:3000/comments', data)
      .map((response: Response) => response.json());
  }
}
