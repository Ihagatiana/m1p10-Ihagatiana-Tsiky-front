import { AuthServiceService } from './../../../shared/services/auth-service.service';
import { LoginService } from './service/login.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  loading = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly loginService: LoginService,
    private readonly authService: AuthServiceService
  ) {
    this.form = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    this.loading = true;
    this.loginService.onLogIn(this.form.value).subscribe(
      (data) => {
        this.authService.updateLoggedInRole(data.roles);
        this.authService.updateLoggedInState(true);
        this.authService.updateLoggedInName(data.name);
        this.authService.updateLoggedprofilePic(
          data.photo.length > 0 ? data.photo[0] : null
        );
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.loading = false;
      }
    );
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
