import { Component, OnInit } from '@angular/core';
import { Navigation } from './models/navigation';


@Component({
  styleUrls: ['./navigation.component.css'],
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})

export class NavigationComponent implements OnInit {

  menus: Navigation[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menus = [
      {
        label: 'Menu 1'
      },
      {
        label: 'Menu 2'
      },
      {
        label: 'Menu 3'
      }
    ]
  }
}



