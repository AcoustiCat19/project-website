import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Balance } from './../shared/balance.model';

@Component({
  selector: 'app-calc-input',
  templateUrl: './calc-input.component.html',
  styleUrls: ['./calc-input.component.css']
})
export class CalcInputComponent implements OnInit {
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('interestRateInput') interestRateInputRef: ElementRef;
  @ViewChild('monthsToPayOffInput') monthsToPayOffInputRef: ElementRef;
  // @ViewChild('desiredMonthlyPaymentInput') desiredMonthlyPaymentInputRef: ElementRef;
  // @Output() monthlyPaymentAmount = new EventEmitter<number>();
  // @Output() totalPaymentAmount = new EventEmitter<number>();
  @Output() balanceInputted = new EventEmitter<Balance>();
  @Output() balanceCleared = new EventEmitter();
  @Output() deleteBalance = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddBalance() {
    const balance = this.amountInputRef.nativeElement.value;
    const name = this.nameInputRef.nativeElement.value;
    const interestRate = this.interestRateInputRef.nativeElement.value;
    const monthsToPayOff = this.monthsToPayOffInputRef.nativeElement.value;
    const newBalance = new Balance(balance, name, interestRate, monthsToPayOff);

    if (isNaN (balance) || balance ===null || balance ==="" || name === "" || 
    isNaN (interestRate) || interestRate ===null || interestRate ==="" || 
    isNaN (monthsToPayOff) || monthsToPayOff ===null || monthsToPayOff ==="") {
      alert("Please enter a valid variable");
    }
    else this.balanceInputted.emit(newBalance);


    // if (isNaN (balance) || balance ===null) {
    //   alert("balance");
    // }    
    // else this.balanceInputted.emit(newBalance);

    // if (name !== "") {
    //   alert("name");
    // }
    // else this.balanceInputted.emit(newBalance);


    // if (isNaN (interestRate) || interestRate ===null) {
    //   alert("interestRate");
    // }
    // else this.balanceInputted.emit(newBalance);

    // if (isNaN (monthsToPayOff) || monthsToPayOff !==null) {
    //   alert("months");
    // }
    // else this.balanceInputted.emit(newBalance);



    console.log(balance);
    console.log(name);
    console.log(interestRate);
    console.log(monthsToPayOff);

    // const desiredMonthlyPayment = this.desiredMonthlyPaymentInputRef.nativeElement.value;
  }

  onClearAll() {
    this.balanceCleared.emit();
  }

  onBalanceDeleted() {
    this.deleteBalance.emit();
  }

}
