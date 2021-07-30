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


  constructor(
    private messageService: MessagesService
  ) { }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.messageService
      .subject.unsubscribe();
  }


  ngOnInit(): void {
    // retourne une liste de messages
    // this.messageService.getAll()
    // .then(ms=>{
    //   this.messages = ms
    // })
    // dans le cas où ça s'est mal passé -> catch
    // .catch(reason=> console.log(reason))
    this.messageService
      .subject
      .subscribe(messages => {
        this.messages = messages
      })
    this.messageService.reloadDatas();
  }

  // méthode qui récupère l'évenement du click sur le checkbox du read
  filter(event: Event) {
    // caste de l'élément afin de pouvoir le manipuler en objet
    let input = event.target as HTMLInputElement;
    // Va tester chaque message de la méthode filtrer
    // renvoie l'élément si la condition est vérifiée : si l'input est coché
    // et renvoie la liste des messages lus
    this.messages.filter( messages => messages.read === input.checked);
    console.log(event);
  }

}
