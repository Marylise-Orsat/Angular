import { Injectable } from '@angular/core';

// la classe MessagesService est un type et possède la propiété @Injectable (elle en hérite = décorateur)

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  getAll() {
    return this;
  }

}
