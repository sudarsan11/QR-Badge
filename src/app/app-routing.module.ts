import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateQrComponent } from './qr/create-qr/create-qr.component';

const routes: Routes = [
  {path: 'create-qrcode', component: CreateQrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
