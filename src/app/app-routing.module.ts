import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/main-page/main-page.module').then(item => item.MainPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then(item => item.NewsModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(item => item.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(item => item.ContactModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
