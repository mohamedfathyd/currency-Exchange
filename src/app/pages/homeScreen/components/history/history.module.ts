import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { routes } from '../../homeScreen.routing';



@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,CoreModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class HistoryModule { }
