import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {UserModel} from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(private http: Http) {
  }

  getUserByEmail(email: string): Observable<UserModel> {
    return this.http.get(`http://localhost:3000/users?email=${email}`)
      .map((respons: Response) => respons.json())
      .map((user: UserModel) => user[0] ? user[0] : undefined);
  }

  newUser(user: UserModel): Observable<UserModel> {
    return this.http.post('http://localhost:3000/users', user)
      .map((respons: Response) => respons.json());
  }
}
