import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class BlogService {
  constructor(private http: Http) {
  }

  getPosts() {
    return this.http.get('http://localhost:3000/posts')
      .map((response: Response) => response.json());
  }

  getPosts2() {
    return this.http.get('http://localhost:3000/posts')
      .map((response: Response) => response.json());
  }

  addPost(titleName: string, descriptionName: string) {
    const data = {
      name: titleName,
      description: descriptionName
    };
    return this.http.post('http://localhost:3000/posts', data)
      .map((response: Response) => response.json());
  }

  changePost(postarray: any, isd: number) {
    const data = {
      name: postarray.name,
      description: postarray.description
    };
    return this.http.put(`http://localhost:3000/posts/${isd}`, data)
      .map((response: Response) => response.json());
  }

  deletePost(id: any) {
    return this.http.delete(`http://localhost:3000/posts/${id}`)
      .map((response: Response) => response.json());
  }


  getPostbyId(id: number) {
    return this.http.get(`http://localhost:3000/posts/${id}`)
      .map((response: Response) => response.json());
  }

}
