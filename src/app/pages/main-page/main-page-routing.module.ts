import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetFromApiResolver } from 'src/app/resolver/get-from-api.resolver';
import { CalculatorComponent } from './calculator/calculator.component';
import { MainComponent } from './main/main.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: '',
    component:MainComponent
  },
  {
    path: 'todos',
    component: TodoComponent,
    resolve: {
      firstResolver: GetFromApiResolver
    }
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
