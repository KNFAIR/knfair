import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';



@NgModule({
  declarations: [
    AddressComponent
  ],
  imports: [
    CommonModule
  ],
   exports: [
       AddressComponent
   ]
})
export class SharedModule { }
