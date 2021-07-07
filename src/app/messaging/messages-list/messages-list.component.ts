import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {

  messages: Message[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
