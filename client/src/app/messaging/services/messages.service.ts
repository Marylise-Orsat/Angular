import { Message } from './../models/message';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

// la classe MessagesService est un type et possède la propiété @Injectable (elle en hérite = décorateur)
@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  public subject: BehaviorSubject<Message[]>

  private messages = [] as Message[]

  constructor(
    private http: HttpClient,
    private router : Router) {
      this.subject = new BehaviorSubject([] as Message[]);
    }

  // pour attendre que les datas arrivent avant que l'on passe à la suite = pour le rendre synchrone
  async load() {
    let messages = await this.http.get("").toPromise();
  }

 // type Message[] - retourne un tableau
  getAll(): Promise<Message[]> {
    // on appelle le HTTPClient
    //un objet de type observable (<Message[]>) va contenir une liste de messages
    return this.http
      .get<Message[]>("http://localhost:9977/messages")
      .toPromise();

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
    return {id:0};
    // return this.messages.find(m=> m.id = id);
  }


  // type void - n'est pas obligé de retourner quelque chose
  create(message: Message): void {
    // this.messages.push(message);
    this.http
      .post('http://localhost:9977/messages', message)
      .toPromise()
      .then(datas => {
        this.reloadDatas();
        this.router.navigate(['/inbox']);
      })
      .catch(reason => {
        console.log(reason);
      })
  }


  getObservable(): Observable<Message[]> {
    return this.http
      .get<Message[]>("http://localhost:9977/messages");
  }

  reloadDatas(): void {
    this.http
      .get<Message[]>("http://localhost:9977/messages")
      .toPromise()
      .then(messages => {
        this.subject.next(messages);
    })
  }


}
