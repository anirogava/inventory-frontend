import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';
export interface SignUpForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  signUP(form: NgForm) {
    if (form.invalid) {
      return;
    }
    from(this.authService.register(form.value)).subscribe(() => {
      this.router.navigate(['main']);
    });
  }

  ngOnInit() {}
}
