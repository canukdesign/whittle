import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user: any;

  setUser(user) {
    this.user = user;
  }

  getUser(): any {
    return this.user;
  }
}
