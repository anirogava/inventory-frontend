import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignInForm } from '../sign-in/sign-in.component';

export function initializeAppFactory(provider: AuthService): () => void {
  return () => provider.fetchUser();
}
interface User {
  id: string | null | undefined;
  userId: string;
  email: string | null | undefined;
  password: string;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: User | null = null;

  get user(): User | null {
    return this._user;
  }
  get isLoggedIn(): boolean {
    return !!this._user;
  }

  get userId() {
    return this._user?.id;
  }
  constructor(private http: HttpClient) {}
  public isAuthenticated(): Boolean {
    return !!this._user;
  }
  public validate(userName: string, password: string) {
    return this.http.post(`${environment.baseUrl}`, {
      username: userName,
      password: password,
    });
  }
  fetchUser() {
    return new Promise((resolve) => {
      this.http
        .get<User | null>(`${environment.baseUrl}/user`)
        .subscribe((res: User | null) => {
          if (res) {
            this._user = res;
          }
          resolve(true);
        });
    });
  }
  signIn(user: SignInForm) {
    return this.http.post(`${environment.baseUrl}/login`, user);
  }
  register(user: SignInForm) {
    return this.http.post<SignInForm[]>(
      `${environment.baseUrl}/register`,
      user
    );
  }
}
