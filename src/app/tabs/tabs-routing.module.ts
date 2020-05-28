import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
/*
const routes: Routes = [
  {
    path: '',
    component: TabsPage
  }
];*/
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {path: 'home', loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)},
      {path: 'profil', loadChildren: () => import('../profil/profil.module').then( m => m.ProfilPageModule)},
      {path: 'search', loadChildren: () => import('../search/search.module').then( m => m.SearchPageModule)},
    ]
  },
  {
   path: '',
   redirectTo: 'tabs',
   pathMatch: 'full'
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
