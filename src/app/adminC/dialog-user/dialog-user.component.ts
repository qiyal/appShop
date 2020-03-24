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
  constructor(private _dialog: MatDialogRef<DialogUserComponent>,
              @Inject(MAT_DIALOG_DATA) public _data: any, private formB: FormBuilder, private _service: ControlService) {
  if (_data) {
    this.new = false;
    this.form = this.formB.group({
      id: [_data.id, Validators.required],
      userName: [_data.userName, Validators.required],
      surName: [_data.surName, Validators.required],
      password: [_data.password, Validators.required],
      roleID: [parseInt(_data.roleID), Validators.required]
    });
  } else {
  this.form = this.formB.group({
    userName: ['', Validators.required],
    surName: ['', Validators.required],
    password: ['', Validators.required],
    roleID: ['', Validators.required]
  });
  this.new = true;
}
}

  ngOnInit(): void {
    this.getRoles();
  }

create() {
  this._dialog.close(this.form.getRawValue());
}

update() {
  this._dialog.close(this.form.getRawValue());
}
getRoles() {
  this._service.getAllRoles().subscribe(res => {
    this.roles = res;
  });
}
}
