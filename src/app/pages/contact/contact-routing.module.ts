import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { FormComponent } from './form/form.component';
import { ReactiveComponent } from './form/reactive/reactive.component';
import { TemplateDrivenFormComponent } from './form/template-driven-form/template-driven-form.component';

const routes: Routes = [
  {
    path: '',
    component:ContactComponent,
  },
  {
    path: 'form',
    component: FormComponent,
    children: [
      {
        path:'driven',
        component: TemplateDrivenFormComponent
      },
      {
        path:'reactive',
        component: ReactiveComponent
      }
    ]

  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
