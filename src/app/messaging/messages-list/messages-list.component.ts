import { MessagesService } from './../services/messages.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {

  @Input() messages!: Message[];

  // affiche le nb de messages que l'on veut dans notre component
  @Input() count: number = 0;


  constructor(private messageService: MessagesService,


    ) { }

  ngOnInit(): void {
    this.messageService.getAll();
    //gestion du nombre de messages
    this.messages = this.messages.splice(0, this.count);

  }

  // méthode qui récupère l'évenement du click sur le checkbox du read
  filter(event: Event) {
    // caste de l'élément afin de pouvoir le manipuler en objet
    let input = event.target as HTMLInputElement;
    // Va tester chaque message de la méthode filtrer
    // renvoie l'élément si la condition est vérifiée : si l'input est coché
    // et renvoie la liste des messages lus
    this.messages.filter( message => message.read === input.checked);
    console.log(event);
  }

}
