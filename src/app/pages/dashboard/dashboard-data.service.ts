import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Room } from 'src/app/shared/model/room.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardDataService {
  private roomSource = new BehaviorSubject({ room: null, key: '' });
  currentRoom = this.roomSource.asObservable();

  constructor() {}

  changeRoom(room: Room, key: string) {
    this.roomSource.next({ room: room, key: key });
  }
}
