import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from './admin/admin.component';
import {DialogBoxComponent} from './dialog-box/dialog-box.component';
import {AdminRoutingModule} from './admin-routing.module';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogUserComponent} from './dialog-user/dialog-user.component';



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    DialogBoxComponent,
    DialogUserComponent
  ],
  entryComponents: []
})
export class AdminModule { }
