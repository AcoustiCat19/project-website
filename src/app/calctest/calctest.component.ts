import { Component, OnInit } from '@angular/core';
import { Balance } from './shared/balance.model';

@Component({
  selector: 'app-calctest',
  templateUrl: './calctest.component.html',
  styleUrls: ['./calctest.component.css']
})

export class CalctestComponent implements OnInit {
  balances: Balance[] = [
  ];

  constructor() { }

  ngOnInit() {
    this.balances = JSON.parse(localStorage.getItem('loanCalcBalance')) || [];
  }

  saveBalancesToStorage() {
    localStorage.setItem('loanCalcBalance', JSON.stringify(this.balances));
  }

  onBalanceInputted(balance: Balance) {
    this.balances.push(balance);
    this.saveBalancesToStorage();
  }
  onBalanceCleared() {
    this.balances = [];
    this.saveBalancesToStorage();
  }

  onDeleteBalance(idx) {
    console.log(idx);
    alert("If only it were this easy to get rid of your loans!");
    this.balances.splice(idx, 1);
    this.saveBalancesToStorage();
  }
}
