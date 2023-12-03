import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/homeScreen/homeScreen.module').then(m => m.HomeScreenModule)
  },
  {
    path: 'homeScreen',
    loadChildren: () => import('./pages/homeScreen/homeScreen.module').then(m => m.HomeScreenModule)
  },
  {
    path: '**',
    redirectTo: '/homeScreen'
  } 
];

