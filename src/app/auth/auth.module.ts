import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { MustMatchDirective } from './must-match.directive';
import { AuthService, initializeAppFactory } from './service/auth.service';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, FormsModule],
  declarations: [SignInComponent, SignUpComponent, MustMatchDirective],
})
export class AuthModule {}
