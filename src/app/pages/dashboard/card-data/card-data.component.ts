import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.css'],
})
export class CardDataComponent implements OnInit {
  @Input() title: String;
  @Input() data: String;

  @Output() showHistoryEvent = new EventEmitter<String>();

  constructor() {}

  ngOnInit(): void {}

  showHistory() {
    this.showHistoryEvent.emit(this.title);
  }
}
