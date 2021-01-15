import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailedComponent } from './detailed/detailed.component';
import { NewsComponent } from './news.component';

const routes: Routes = [
  {
    path: "",
    component: NewsComponent
  },
  {
    path:'detailed',
    component: DetailedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
