import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthUserService} from '../auth-user.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {
  new = false;
  form: FormGroup;
  constructor( private auth: AuthUserService,
               private dialog: MatDialogRef<DialogLoginComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) {
    if (data) {
      this.new = false;
      this.form = this.formBuilder.group({
        userName: [data.userName, Validators.required],
        password: [data.password, Validators.required],
      });
    } else {
      this.form = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required],
      });
      this.new = true;
    }
  }


  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.form.getRawValue().userName, this.form.getRawValue().password);
    this.dialog.close();
  }

}
