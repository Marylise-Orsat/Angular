import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';


@Component({
  selector: 'app-messages-writing',
  templateUrl: './messages-writing.component.html',
  styleUrls: ['./messages-writing.component.css']
})
export class MessagesWritingComponent implements OnInit {

  // on initialise un objet mess (et non une liste) avec des clés/valeurs
  mess: Message = {
    id: 1,
    from: "Mme Bean",
    to: "Mr Bean",
    subject: "Kikou",
    body: "fkgsionbn votbs,rnb jnmzbtv gerngi iqnvz iznsob",
    read: false
  };

  constructor() { }

  ngOnInit(): void {

  }

  send() {
    console.log(this.mess);
  }

  clear() {
    this.mess = {};
  }

}
