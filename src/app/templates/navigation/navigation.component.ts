import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  // on type pour faire une liste
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'joli'
      },
      {
        label: 'menu2'
      }
    ]
  }

}
