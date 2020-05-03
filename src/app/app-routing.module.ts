import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'qr-code',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'detail-produit',
    loadChildren: () => import('./detail-produit/detail-produit.module').then( m => m.DetailProduitPageModule)
  },
  {
    path: 'validation',
    loadChildren: () => import('./validation/validation.module').then( m => m.ValidationPageModule)
  },
  {
    path: 'validation-detail',
    loadChildren: () => import('./validation-detail/validation-detail.module').then( m => m.ValidationDetailPageModule)
  },
  {
    path: 'qr-code',
    loadChildren: () => import('./qr-code/qr-code.module').then( m => m.QrCodePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
