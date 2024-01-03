import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import {environment  } from '../../../environments/environment'
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [{
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner , Free Wifi ,TV , Bathroom ,Kitchen',
    price: 500,
    photos: '../assets/20200125_164850.jpg',
    checkinTime: new Date('11-November-2023'),
    checkoutTime: new Date('11-November-2020'),
    rating: 4.5
  },
  {
    roomNumber: 2,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner , Free Wifi ,TV , Bathroom ,Kitchen',
    price: 1000,
    photos: '../assets/20200125_164850.jpg',
    checkinTime: new Date('11-November-2023'),
    checkoutTime: new Date('11-November-2020'),
    rating: 3.4256348
  },
  {
    roomNumber: 3,
    roomType: 'Private Suite',
    amenities: 'Air Conditioner , Free Wifi ,TV , Bathroom ,Kitchen',
    price: 15000,
    photos: '../assets/20200125_164850.jpg',
    checkinTime: new Date('11-November-2023'),
    checkoutTime: new Date('11-November-2020'),
    rating: 2.6
  }];
  constructor(@Inject(APP_SERVICE_CONFIG ) private config:AppConfig ) { 
    console.log('Rooms Service Initialized...')
  }
getRooms(){
  return this.roomList;
}

}
