import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number, currency: string): string {
    if (currency === 'INR') {
      return '₹ ' + value.toLocaleString('en-IN');
    } else {
      return '$ ' + value.toLocaleString('en-IN');
    }
  }

}
