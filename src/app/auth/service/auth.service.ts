import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignInForm } from '../sign-in/sign-in.component';

export function initializeAppFactory(provider: AuthService): () => void {
  return () => provider.fetchUser();
}
interface User {
  uid: string | null | undefined;
  email: string | null | undefined;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: User | null = null;

  get isLoggedIn(): boolean {
    return !!this._user;
  }

  get userId() {
    return this._user?.uid;
  }
  constructor(private http: HttpClient) {}

  userUrl = 'http://localhost:3000';
  public isAuthenticated(): Boolean {
    let _user = this.http.post(`${this.userUrl}/user`, this._user);
    return true;
  }
  public validate(userName: string, password: string) {
    return this.http.post(`${this.userUrl}`, {
      username: userName,
      password: password,
    });
  }
  fetchUser() {
    this.http
      .get<User | null>(`${this.userUrl}/user`)
      .subscribe((res: User | null) => {
        this._user = res;
      });
  }
  signIn(user: SignInForm) {
    return this.http.post(`${this.userUrl}/login`, user);
  }
  register(user: SignInForm) {
    return this.http.post<SignInForm[]>(`${this.userUrl}/register`, user);
  }
}
