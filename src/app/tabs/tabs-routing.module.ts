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
      //{path: 'tabs', loadChildren: () => import('../tabs/tabs.module').then( m => m.TabsPageModule)},
      {path: 'profil', loadChildren: () => import('../profil/profil.module').then( m => m.ProfilPageModule)},
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
