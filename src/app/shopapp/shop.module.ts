import {NgModule} from '@angular/core';
import {ShopComponent} from './shop/shop.component';
import {CommonModule} from '@angular/common';
import {ShopRoutingModule} from './shop-routing.module';

@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  entryComponents: []
})
export class ShopModule {}
