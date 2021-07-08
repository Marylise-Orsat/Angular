import { Message } from './../models/message';
import { Injectable } from '@angular/core';

// la classe MessagesService est un type et possède la propiété @Injectable (elle en hérite = décorateur)
@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messages: Message[] = [
  ]

  constructor() { }

 // type Message[] - retourne un tableau
  getAll(): Message[] {
    return this.messages;
  }

  // type Message - retourne un seul message (un objet)
  getById(id:number): Message | undefined {
    return this.messages.find(m=> m.id = id);
  }


  // type void - n'est pas obligé de retourner quelque chose
  create(message: Message): void {
    this.messages.push(message);
  }

}
