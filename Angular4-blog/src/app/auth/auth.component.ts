import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    console.log(this.authService.isLoggedIn());
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/system', 'posts']);
    } else {
      this.router.navigate(['/auth', 'login']);
    }
  }

}
