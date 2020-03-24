import { Component } from '@angular/core';
import {AuthUserService} from './auth-user.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogLoginComponent} from './dialog-login/dialog-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newApp';

  constructor(private auth: AuthUserService, private dialog: MatDialog) {
  }

  login() {
    this.dialog.open(DialogLoginComponent, {
      width: '300px'
    });
  }

  logout() {
    this.auth.logout();
  }
}
