import { Component, OnInit } from '@angular/core';
import { inventoryResult } from '../content.model';

const EMPTY = 'სია ცარიელია.';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  usersList: inventoryResult[] = [];

  get emptySting(): string {
    return EMPTY;
  }

  constructor() {}

  deleteInventory() {}

  ngOnInit() {}
}
