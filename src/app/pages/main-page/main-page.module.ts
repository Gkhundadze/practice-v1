import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainComponent } from './main/main.component';
import { TodoComponent } from './todo/todo.component';



@NgModule({
  declarations: [MainComponent, TodoComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
  ]
})
export class MainPageModule { }
