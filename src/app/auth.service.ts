import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: any[] = [
    { user: 'usuario1', password: '123456' },
    { user: 'usuario2', password: 'abcdef' },
  ];
  private loggedIn = false;

  public login(user: string, password: string): boolean {
    const result = this.users.find(
      (u) => u.user === user && u.password === password
    );
    if (result) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    return this.loggedIn;
  }

  public logout(): void {
    this.loggedIn = false;
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
