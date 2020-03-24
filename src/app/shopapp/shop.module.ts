import {NgModule} from '@angular/core';
import {ShopComponent} from './shop/shop.component';
import {CommonModule} from '@angular/common';
import {ShopRoutingModule} from './shop-routing.module';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [ShopComponent],
    imports: [
        CommonModule,
        ShopRoutingModule,
        MatCardModule
    ],
  entryComponents: []
})
export class ShopModule {}
