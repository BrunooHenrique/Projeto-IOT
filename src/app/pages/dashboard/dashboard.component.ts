import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogComponent } from 'src/app/pages/dashboard/dialog/dialog.component';
import { NgxSpinnerService } from 'ngx-spinner';

import { Room } from 'src/app/shared/model/room.model';
import { DashboardService } from './dashboard.service';
import { DashboardDataService } from './dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  roomKey: string;
  room: Room;
  rooms: Observable<any>;

  constructor(
    public dialog: MatDialog,
    private dashboardService: DashboardService,
    private dashboardDataService: DashboardDataService,
    public spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.spinner.show();
    this.room = new Room();
    this.room = this.dashboardService.getAll();
    this.spinner.hide();
    // console.log(this.dashboardService.getAll());
    // this.rooms = this.dashboardService.getAll();
    // this.rooms.subscribe((res) => {
    //   this.room = res[0];
    //   this.roomKey = this.room.key;
    //   delete this.room.key;
    //   this.spinner.hide();
    // });
  }

  edit(key: string) {
    this.dashboardDataService.changeRoom(this.room, key);
  }

  showHistory(historyType: String) {
    switch (historyType) {
      case 'Temperatura':
        this.showHistoryTemperature(historyType);
        break;

      case 'Luminosidade':
        this.showHistoryLuminosity(historyType);
        break;

      case 'Distância':
        this.showHistoryDistance(historyType);
        break;

      case 'Umidade':
        this.showHistoryHumidity(historyType);
        break;
    }
  }

  showHistoryTemperature(historyType: String) {
    this.dialog.open(DialogComponent, {
      data: historyType,
    });
  }

  showHistoryLuminosity(historyType: String) {
    this.dialog.open(DialogComponent, {
      data: historyType,
    });
  }

  showHistoryDistance(historyType: String) {
    this.dialog.open(DialogComponent, {
      data: historyType,
    });
  }

  showHistoryHumidity(historyType: String) {
    this.dialog.open(DialogComponent, {
      data: historyType,
    });
  }

  switchDoorStatus(checked: boolean) {
    this.room.set_porta = checked ? 1 : 0;
    this.dashboardService.update(this.room, this.roomKey);
  }

  switchArStatus(checked: boolean) {
    this.room.set_ar = checked ? 1 : 0;
    this.dashboardService.update(this.room, this.roomKey);
  }

  switchLuminosidadeStatus(checked: boolean) {
    this.room.set_luminosidade = checked ? 1 : 0;
    this.dashboardService.update(this.room, this.roomKey);
  }

  switchMultimidiaStatus(checked: boolean) {
    this.room.set_multimidia = checked ? 1 : 0;
    this.dashboardService.update(this.room, this.roomKey);


    
  }
}
