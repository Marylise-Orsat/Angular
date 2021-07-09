import { Message } from './../models/message';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// la classe MessagesService est un type et possède la propiété @Injectable (elle en hérite = décorateur)
@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messages: Message[] = [
  ]

  constructor(private http: HttpClient) { }

 // type Message[] - retourne un tableau
  getAll(): Promise<Message[]> {
    // on appelle le HTTPClient
    //un objet de type observable (<Message[]>) va contenir une liste de messages
    return this.http.get<Message[]>("http://localhost:4200/assets/datas.json").toPromise();

      // .toPromise()        //promesse
      // .then((ms)=>{       // fonction anonyme qui sera exécutée après
      //   this.messages = ms;
      // });

      //et une fois que la liste sera peuplée, subscribe se déclanche + on lui dit le type d'objet qu'il va nous retourner
      // .subscribe((ms) => {
      //   this.messages = ms
      // });
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
