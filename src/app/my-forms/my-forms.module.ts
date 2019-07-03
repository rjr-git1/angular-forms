import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFormsRoutingModule } from './my-forms-routing.module';
import { Form01Component } from './form01/form01.component';
import { Form02Component } from './form02/form02.component';

@NgModule({
  declarations: [Form01Component, Form02Component],
  imports: [
    CommonModule,
    MyFormsRoutingModule
  ],
  exports: [Form01Component, Form02Component]
})
export class MyFormsModule { }
