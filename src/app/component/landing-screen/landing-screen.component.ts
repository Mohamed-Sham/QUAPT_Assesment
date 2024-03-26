import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.css']
})
export class LandingScreenComponent {

  hotelListJson: any[] = [];

  activeButton: string = '';

  Top_carouselList_JSON = [
    {
      img : './assets/food1.jpg',
      topText : 'Exclusive',
      bannerText : 'Epic Deals',
      offer : '40% Off ',
      belowText : 'on legendary resturant'
    },
    {
      img : './assets/food2.avif',
      topText : 'offer',
      bannerText : 'Epic Deals',
      offer : '40% Off ',
      belowText : 'on legendary resturant'
    },
    {
      img : './assets/food1.jpg',
      topText : 'offer',
      bannerText : 'Epic Deals',
      offer : '40% Off ',
      belowText : 'on legendary resturant'
    },
    {
      img : './assets/food2.avif',
      topText : 'Exclusive',
      bannerText : 'Epic Deals',
      offer : '40% Off ',
      belowText : 'on legendary resturant'
    },
    {
      img : './assets/food1.jpg',
      topText : 'Exclusive',
      bannerText : 'Epic Deals',
      offer : '40% Off ',
      belowText : 'on legendary resturant'
    },
    {
      img : './assets/food2.avif',
      topText : 'Exclusive',
      bannerText : 'Epic Deals',
      offer : '40% Off ',
      belowText : 'on legendary resturant'
    },
  ]

  icon_List = [
    {
      img : './assets/air-freight.png',
      text : 'Express delivery'
    },
    {
      img : './assets/approved.png',
      text : 'Sefely sealed'
    },
    {
      img : './assets/discount.png',
      text : 'Great offers'
    },
    {
      img : './assets/tray.png',
      text : 'New Arraivals'
    },
    {
      img : './assets/love.png',
      text : 'Trending places'
    },
  ]

  nonVegHotelListJson = [
    {
      img : './assets/food1.jpg',
      name : 'Burger King',
      type : 'fast Food, Cafe',
      amount : 250,
      time : '35-45',
      offer : '50% OFF use code zomato'
    },
    {
      img : './assets/food2.avif',
      name : 'Mainland Restaurant',
      type : 'fast Food, Chinise',
      amount : 250,
      time : '35-45',
      offer : '50% OFF use code zomato'
    },
    {
      img : './assets/food2.avif',
      name : 'SS Hyderbad',
      type : 'Indian, Chinise',
      amount : 250,
      time : '35-45',
      offer : null
    },
    {
      img : './assets/food1.jpg',
      name : 'Mainland Restaurant',
      type : 'fast Food, Chinise',
      amount : 250,
      time : '35-45',
      offer : '50% OFF use code zomato'
    },
    {
      img : './assets/food1.jpg',
      name : 'SS Hyderbad',
      type : 'Indian, Chinise',
      amount : 250,
      time : '35-45',
      offer : null
    },
    {
      img : './assets/food2.avif',
      name : 'Mainland Restaurant',
      type : 'fast Food, Chinise',
      amount : 250,
      time : '35-45',
      offer : '50% OFF use code zomato'
    },
    {
      img : './assets/food2.avif',
      name : 'SS Hyderbad',
      type : 'Indian, Chinise',
      amount : 250,
      time : '35-45',
      offer : null
    },
    {
      img : './assets/food1.jpg',
      name : 'Mainland Restaurant',
      type : 'fast Food, Chinise',
      amount : 250,
      time : '35-45',
      offer : '50% OFF use code zomato'
    },
  ]

  vegHotelListJson = [
    {
      img : './assets/vegFood1.webp',
      name : 'Adayar ananda bhavan',
      type : 'Indian, chinese',
      amount : 250,
      time : '35-45',
      offer : '50% OFF use code zomato'
    },
    {
      img : './assets/vegFood2.avif',
      name : 'Pure Veg',
      type : 'Indian',
      amount : 250,
      time : '35-45',
      offer : '50% OFF use code zomato'
    },
    {
      img : './assets/vegFood3.avif',
      name : 'Sangeetha',
      type : 'Indian, Chinise',
      amount : 250,
      time : '35-45',
      offer : null
    },
    {
      img : './assets/vegFood1.webp',
      name : 'Adayar ananda bhavan',
      type : 'fast Food, Chinise',
      amount : 250,
      time : '35-45',
      offer : '50% OFF use code zomato'
    },
    {
      img : './assets/vegFood3.avif',
      name : 'Pure Veg',
      type : 'Indian',
      amount : 250,
      time : '35-45',
      offer : '50% OFF use code zomato'
    },
  ]

  constructor() { }

  ngOnInit() {
    this.getHotelList('nonVeg')
  }

  
  getHotelList(type : string) {
    this.activeButton = type;
    if(type == 'veg') {
      this.hotelListJson = this.vegHotelListJson
    } else {
      this.hotelListJson = this.nonVegHotelListJson
    }
  }
  

}

