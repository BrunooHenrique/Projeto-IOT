import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css']
})
export class CardProfileComponent implements OnInit {
  @Input() name: string;
  @Input() universityId: string;

  constructor() { }

  ngOnInit(): void {
  }

}
