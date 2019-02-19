import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../shared/services/users.service';
import {UserModel} from '../../shared/models/user.model';
import {MessageModule} from '../../shared/models/message.module';
import {AuthService} from '../../shared/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: MessageModule;

  constructor(private usersService: UsersService,
              private  authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.message = new MessageModule('denger', '');


    this.route.queryParams.subscribe((param: Params) => {
      if (param['nowCanLogin']) {
        this.showMessage({text: 'Пробуйте зайти в систему', type: 'success'});
      } else if (param['accessDenied']) {
        this.showMessage({text: 'Для работы с админкой нужно залогинится', type: 'warning'});
      }
    });


    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  private showMessage(message: MessageModule) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 4000);
  }

  onSubmit() {
    const formData = this.form.value;
    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: UserModel) => {
        if (user) {

          if (user.password === formData.password) {

            this.message.text = '';
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            this.router.navigate(['/system', 'posts']);

          } else {

            this.showMessage({text: 'Пароль не верен', type: 'danger'});

          }
        } else {

          this.showMessage({text: 'Пользователя такого нет', type: 'danger'});

        }
      });

  }


}
