import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private route: Router) {}

  canActivate() {
    console.log(this.authService.isAuthenticated());

    if (!this.authService.isAuthenticated()) {
      this.route.navigate(['sign-in']);
      return false;
    }
    return true;
  }
}
