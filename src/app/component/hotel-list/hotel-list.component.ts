import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {

  @Input() hotelList: any;

  selectedCurrency: string = 'INR';

  currencies: string[] = ['INR', 'USD', 'EUR', 'SGD'];

  constructor(private router : Router) { }

  ngOnInit() {}

  navigateRestDetail(index : number) {
     this.router.navigate(['/restaurant', index + 1], {
      state: {
        hotelData: this.hotelList
      }
    })
  }
}
