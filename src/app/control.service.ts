import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  constructor(private _http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this._http.get('http://localhost:3000/users');
  }

  getAllRoles(): Observable<any> {
    return this._http.get('http://localhost:3000/roles');
  }

  getAllItems(): Observable<any> {
    return this._http.get('http://localhost:3000/products');
  }

  createUser(user: any): Observable<any> {
    return this._http.post('http://localhost:3000/users', user);
  }

  updateUser(user: any) {
    return this._http.put('http://localhost:3000/users/' + user.id, user);
  }

  deleteUser(id) {
    return this._http.delete('http://localhost:3000/users/' + id);
  }

  createItem(item: any): Observable<any> {
    return this._http.post('http://localhost:3000/products', item);
  }

  updateItem(item: any) {
    return this._http.put('http://localhost:3000/products/' + item.id, item);
  }

  deleteItem(id) {
    return this._http.delete('http://localhost:3000/products/' + id);
  }

}
