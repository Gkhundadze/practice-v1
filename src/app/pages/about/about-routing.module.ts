import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';


const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    // children: [
    //   {
    //     path:'calc',
    //     loadChildren: () => import('./calculator/calculator.module').then(item => item.CalculatorModule)
    //   }
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
