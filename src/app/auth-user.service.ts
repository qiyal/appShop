import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ControlService} from './control.service';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  private isAuth = false;
  private users = [];
  constructor(private _http: HttpClient, private _service: ControlService) {
    this.getAllUsers();
  }

  getAllUsers() {
    this._service.getAllUsers().subscribe(res => {
      this.users = res;
    });
  }

  login(username, password) {
      console.log(username);
      console.log(password);

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userName === username && this.users[i].password === password) {
        if (this.users[i].roleID === 1) {
          this.isAuth = true;
          localStorage.setItem('userName', this.users[i].userName);
        }
        else {
          alert("It is just user");
        }
      }
    }
  }

  logout() {
    this.isAuth = false;
  }

  isAuthenticated(): Promise<boolean> {
    return  new Promise(resolve => {
      setTimeout(() => {
        if (localStorage.getItem('userName')){
          this.isAuth = true;
        }  else {
          this.isAuth = false;
        }
        resolve(this.isAuth);
      }, 1000);
    });
  }
}
