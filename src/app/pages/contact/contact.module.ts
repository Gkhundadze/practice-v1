import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TemplateDrivenFormComponent } from './form/template-driven-form/template-driven-form.component';
import { ReactiveComponent } from './form/reactive/reactive.component';


@NgModule({
  declarations: [FormComponent, TemplateDrivenFormComponent, ReactiveComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
