export class Balance {
    public totalPaymentAmount: number;
    public monthlyPaymentAmount: number;
    public yearsToPayOff: number;
    constructor(
        public amount: number, 
        public name: string, 
        public interestRate: number,
        public monthsToPayOff: number,
        // public desiredMonthlyPayment: number,
    ) { 
        this.totalPaymentAmount = (Math.pow(1 + ((interestRate / 100) / 12), monthsToPayOff)) * amount;
        // this.yearsToPayOff = ()
        this.monthlyPaymentAmount = this.totalPaymentAmount / this.monthsToPayOff

    }
}