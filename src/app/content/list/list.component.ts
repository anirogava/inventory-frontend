import { Component, OnInit } from '@angular/core';
import { Address, inventoryResult } from '../content.model';
import { storeService } from '../store.service';

const EMPTY = 'სია ცარიელია.';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  inventoryList: inventoryResult[] = [];
  address = Address;

  get emptySting(): string {
    return EMPTY;
  }
  constructor(private service: storeService) {}

  deleteInventory() {
    // this.service.deletedata(inventory).subscribe((res) => {});
    // console.log();
  }

  ngOnInit() {
    this.service.getAllList().subscribe((res) => {
      this.inventoryList = res;
    });
  }
}
