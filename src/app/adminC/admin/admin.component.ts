import { Component, OnInit } from '@angular/core';
import {ControlService} from '../../control.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';
import {error} from '@angular/compiler/src/util';
import {DialogUserComponent} from '../dialog-user/dialog-user.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _service: ControlService, private _dialog: MatDialog) { }
  displayedColumns: string[] = ['id', 'nameProduct', 'price', 'description', 'action'];
  displayedUsers: string[] = ['id', 'userName', 'roleID', 'action'];
  dataProduct = [];
  dataUsers = [];
  ngOnInit(): void {
    this.getProducts();
    this.getUsers();
  }

  findIdRole(str: string) {
    if ("1" === str) {
      return 'admin';
    }
    else {
      return 'user';
    }
  }


  // getRoles() {
  //   this._service.getAllRoles().subscribe(res =>{
  //     this.roles = res;
  //   });
  // }

  getProducts() {
    this._service.getAllItems().subscribe(res => {
      this.dataProduct = res;
    });
  }

  getUsers() {
    this._service.getAllUsers().subscribe( res => {
      this.dataUsers = res;
    });
  }

  deleteU(id) {
    this._service.deleteUser(id).subscribe(res => {
      this.getUsers();
    }, error => {
      console.error(error);
    });
  }

  deleteP(id) {
    this._service.deleteItem(id).subscribe(res => {
      this.getProducts();
    }, error => {
      console.error(error);
    });
  }

  updateP(item: any) {
    this._dialog.open(DialogBoxComponent, {
      width: '450px',
      data: item
    }).afterClosed().subscribe(res => {
      this._service.updateItem(res).subscribe(result =>
        this.getProducts());
    });
  }

  updateU(user: any) {
    this._dialog.open(DialogUserComponent, {
      width: '450px',
      data: user
    }).afterClosed().subscribe(res => {
      this._service.updateUser(res).subscribe(result =>
        this.getUsers());
    });
  }
  createP() {
    this._dialog.open(DialogBoxComponent, {
      width: '450px',
    }).afterClosed().subscribe( res => {
      this._service.createItem(res).subscribe( result => {
        this.getProducts();
      });
    });
  }

  createU() {
    this._dialog.open(DialogUserComponent, {
      width: '450px',
    }).afterClosed().subscribe( res => {
      this._service.createUser(res).subscribe( result => {
        this.getUsers();
      });
    });
  }

}
