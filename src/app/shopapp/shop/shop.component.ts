import { Component, OnInit } from '@angular/core';
import {ControlService} from '../../control.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  arrItems = [];
  constructor(private _service: ControlService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this._service.getAllItems().subscribe(res => {
      this.arrItems = res;
    });
  }

}
