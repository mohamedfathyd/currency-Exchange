import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

import { CoreModule } from '../../../../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyExchangeComponent } from './currency-exchange.component';


const routes: Routes = [
  { path: '', component: CurrencyExchangeComponent },
];
@NgModule({
  declarations: [CurrencyExchangeComponent],
  imports: [
    CommonModule,
    SharedModule,CoreModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class CurrencyExchangeModule { }
