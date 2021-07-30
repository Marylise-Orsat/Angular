import { Message } from './../../messaging/models/message';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  discord!: Message[];
  gmail!: Message[];

  constructor() { }

  ngOnInit(): void {
    this.discord = [
      {
        id: 12,
        from: 'Mr Bean',
        to: 'Mr Hi',
        body: 'tutututu',
        read: false,
        subject: 'Important'
      },
      {
        id: 13,
        from: 'Michmich',
        to: 'Colette',
        body: 'totototo',
        read: true,
        subject: 'Hola'
      },
      {
        id: 14,
        from: 'Papa',
        to: 'Maman',
        body: 'titititi',
        read: false,
        subject: 'Ohlele'
      },
      {
        id: 15,
        from: 'Tata',
        to: 'Tonton',
        body: 'tatatata',
        read: true,
        subject: 'Ohlila'
      }
    ];

    this.gmail = [
      {
        id: 12,
        from: 'Mr Bean',
        to: 'Mr Hi',
        body: 'tutututu',
        read: false,
        subject: 'Important'
      },
      {
        id: 13,
        from: 'Michmich',
        to: 'Colette',
        body: 'totototo',
        read: true,
        subject: 'Hola'
      },
      {
        id: 14,
        from: 'Papa',
        to: 'Maman',
        body: 'titititi',
        read: false,
        subject: 'Ohlele'
      },
      {
        id: 15,
        from: 'Tata',
        to: 'Tonton',
        body: 'tatatata',
        read: true,
        subject: 'Ohlila'
      }
    ];
  }

}
