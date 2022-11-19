import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestyComponent } from './testy/testy.component';



@NgModule({
  declarations: [
    TestyComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [TestyComponent]
})
export class TestModule { }
