import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';
export interface SignInForm {
  userName: string;
  password: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  email: string = '';
  password: string = '';
  formGroup!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
    from(this.authService.signIn(form.value)).subscribe(() => {
      this.router.navigate(['main']);
      this.authService.validate(this.email, this.password);
    });
  }

  ngOnInit() {}
}
