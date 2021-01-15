import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainComponent } from './main/main.component';
import { TodoComponent } from './todo/todo.component';
import { CalculatorComponent } from './calculator/calculator.component';



@NgModule({
  declarations: [MainComponent, TodoComponent, CalculatorComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
  ]
})
export class MainPageModule { }
