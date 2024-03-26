import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent {

  index: number = 0;
  restaurantDetails: any;

  restaurantData : any
  selectedHotel : any

  descriptionList = [
    {
      img : './assets/gift-box.png',
      heading : 'About this place',
      text : 'view menu, view gallery and more',
      color : '#ffc0cb2b'
    },
    {
      img : './assets/burger.png',
      heading : 'Food Delivery',
      text : 'up to 25% OFF use code TASTY',
      color : '#ffff001a'
    },
    {
      img : './assets/open-box.png',
      heading : 'Enjoy 1 + 1 on food',
      text : 'with a gold membership',
      color : '#00800026'
    },
    {
      img : './assets/tray.png',
      heading : 'Book a table',
      text : 'Fine Dinning area',
      color : '#0dcaf00f'
    }
  ]

  constructor(
    private route: ActivatedRoute,private router : Router
  ) {}

  ngOnInit() {
    this.restaurantData = this.route.snapshot.paramMap.get('id');
    let selectedValue = +this.restaurantData - 1;
    const navigationState = window.history.state;
    if (navigationState && navigationState.hotelData) {
      this.restaurantData = navigationState.hotelData;
    }

    this.restaurantData = this.getDataByIndex(selectedValue);
    
  }

  getDataByIndex(index: number): any {
    if (index >= 0 && index < this.restaurantData.length) {
      return this.restaurantData[index];
    } else {
      return null;
    }
  }

  backToLanding() {
    this.router.navigate(['/home'])
  }
}
