import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {ShopComponent} from './shopapp/shop/shop.component';
import {AdminComponent} from './adminC/admin/admin.component';
import {CanActivAdminService} from './can-activ-admin.service';


const routes: Routes = [
  {path: '', redirectTo: '/shop', pathMatch: 'full'},
  {path: 'shop', loadChildren: () => import('./shopapp/shop.module').then(m => m.ShopModule)},
  {path: 'admin', loadChildren: () => import('./adminC/admin.module').then(m => m.AdminModule), canActivate: [CanActivAdminService]}
  // {path: 'about', component: AboutComponent, children: [
  //     {path: 'extra', component: AboutExtraComponent}
  //   ]},
  // {path: 'posts', component: PostsComponent, canActivate: [AuthGuService]},
  // {path: 'posts/:id', component: PostComponent},
  // {path: 'error', component: ErrorPageComponent},
  // {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
