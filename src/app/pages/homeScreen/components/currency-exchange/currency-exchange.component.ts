import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalState } from 'src/app/core/global/global-state';
import { HomeScreenService } from '../../servcies/homeScreen.service';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.scss']
})
export class CurrencyExchangeComponent extends GlobalState implements OnInit {
  currencies;
  currency;
  ChangeForm: FormGroup;
  currencyResult:string
  constructor( private service:HomeScreenService,private fb: FormBuilder, ) {
    super();
   this.setChangeForm();
   }

  ngOnInit(): void {
    this.getCurrencies();
  }
  setChangeForm() {
    this.ChangeForm = this.fb.group({
      from: ['', [Validators.required,]],
      to: ['', [Validators.required]],
      amount:['',[Validators.required]]
    });
  }
getCurrencies(){
  this.service.getCurrencies().subscribe(res=>{
     this.currencies=res.rates
  })
}
changeCurrency(){
  this.service.CurrencyExchange(this.ChangeForm.value).subscribe(res=>{
    this.currencyResult=res.result
 })
}
}
