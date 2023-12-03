import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { GlobalState } from 'src/app/core/global/global-state';
import { HomeScreenService } from '../../servcies/homeScreen.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent extends GlobalState implements OnInit {
  historicalList;
  constructor(private service: HomeScreenService,private router:Router) {
    super();  
   }

   async ngOnInit(): Promise<void>  {
    this.getHistory()
  }
  getHistory(){
    this.service.CurrencyHistory().subscribe(res=>{
       this.historicalList=res.rates
    })
  }
}
