import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit,AfterViewChecked  {


  hotelName = 'Hilton Hotel';
  numberofRooms = 10;
  hideRooms = false;
  title = 'Room List';
  selectedRoom!: RoomList;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  roomList: RoomList[] = [];
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;
// roomService = new RoomsService();
  constructor(@SkipSelf() private roomsService:RoomsService) { }

  ngOnInit(): void {
this.roomList = this.roomsService.getRooms();   
  }
  ngDoCheck(): void {
    console.log('on check is calling');
  }
  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";
    this.headerChildrenComponent.last.title ='Last Title';
  }
  ngAfterViewChecked(): void {

  }
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi,TV,Bathroom,Kitchen',
      price: 500,
      photos: '../assets/20200125_164850.jpg',
      checkinTime: new Date('11-November-2023'),
      checkoutTime: new Date('11-November-2020'),
      rating: 4.5
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }

}
