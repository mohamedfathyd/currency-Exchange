import { Routes } from '@angular/router';

import { HomeScreenComponent } from './homeScreen/homeScreen.component';

export const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  {
    path: 'exchange',
    loadChildren: () => import('./components/currency-exchange/currency-exchange.module').then(m => m.CurrencyExchangeModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./components/history/history.module').then(m => m.HistoryModule)
  },
];
