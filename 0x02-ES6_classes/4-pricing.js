import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(x) {
    this._amount = x;
  }

  get currency() {
    return this._currency;
  }

  set currency(x) {
    this._currency = x;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }

  convertPrice(amount, conversionRate) {
    return this._amount * conversionRate;
  }
}
