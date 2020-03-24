import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ControlService} from '../../control.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  new = false;
  form: FormGroup;
  constructor(private _dialog: MatDialogRef<DialogBoxComponent>, @Inject(MAT_DIALOG_DATA) public _data: any,
              private formB: FormBuilder, private _service: ControlService) {

    if (_data) {
      this.new = false;
      this.form = this.formB.group({
        id: [_data.id, Validators.required],
        nameProduct: [_data.nameProduct, Validators.required],
        price: [_data.price, Validators.required],
        description: [_data.description, Validators.required]
      });
    } else {
      this.form = this.formB.group({
        nameProduct: ['', Validators.required],
        price: ['', Validators.required],
        description: ['', Validators.required]
      });
      this.new = true;
    }
  }

  ngOnInit(): void {
    //
  }

  create() {
    this._dialog.close(this.form.getRawValue());
  }

  update() {
    this._dialog.close(this.form.getRawValue());
  }

}
