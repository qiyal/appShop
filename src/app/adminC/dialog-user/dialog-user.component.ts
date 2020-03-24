import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ControlService} from '../../control.service';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.css']
})
export class DialogUserComponent implements OnInit {
  new = false;
  form: FormGroup;
  roles = [];
  constructor(private _dialog: MatDialogRef<DialogUserComponent>, @Inject(MAT_DIALOG_DATA) public _data: any,
              private formB: FormBuilder, private _service: ControlService) {
    if (_data) {
      this.new = false;
      this.form = this.formB.group({
        id: [_data.id, Validators.required],
        userName: [_data.nameProduct, Validators.required],
        password: [_data.price, Validators.required],
        roleID: [this.findIdRole(_data.description), Validators.required]
      });
    } else {
      this.form = this.formB.group({
        userName: ['', Validators.required],
        password: ['', Validators.required],
        roleID: [, Validators.required]
      });
      this.new = true;
    }
  }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this._service.getAllRoles().subscribe(res =>{
      this.roles = res;
    });
  }

  findIdRole(str: string) {
    if ('admin' === str) {
      return 1;
    }
    else {
      return 2;
    }
  }

  create() {
    this._dialog.close(this.form.getRawValue());
  }

  update() {
    this._dialog.close(this.form.getRawValue());
  }

}
