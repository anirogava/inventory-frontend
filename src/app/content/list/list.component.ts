import {Component, OnInit} from '@angular/core';
import {Address, Inventory} from '../content.model';
import {Pagination} from '../models/pageination';
import {storeService} from '../services/store.service';
import {ActivatedRoute, Router} from "@angular/router";

const EMPTY = 'სია ცარიელია.';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  inventoryList: Inventory[] = [];
  address = Address;

  pagination: Pagination = {
    count: 0,
    limit: 10,
    offset: 0,
    pages: 0,
    page: 1
  };
  search: string = '';

  get emptySting(): string {
    return EMPTY;
  }

  constructor(
    private service: storeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  deleteInventory(id: number) {
    this.service.remove(id).subscribe((res) => {
      console.log(res);
    });
  }

  loadData() {
    this.service
      .getList(this.pagination.offset, this.pagination.limit)
      .subscribe(res => {
        this.inventoryList = res.items;
        this.pagination.count = res.count;
        this.pagination.pages = Math.round(res.count / this.pagination.limit);
      });
  }

  counter(i: number) {
    return new Array(i)

  }

  ngOnInit() {
    this.pagination.page = parseInt(this.activatedRoute.snapshot.queryParamMap.get('page') || '1')
    this.pagination.offset = this.pagination.page * this.pagination.limit - this.pagination.limit;
    this.loadData();
  }

  changePage(page: number) {
    if (this.pagination.page == page) {
      return
    }
    this.pagination.page = page
    this.pagination.offset = this.pagination.page * this.pagination.limit - this.pagination.limit;
    this.loadData();
    this.router.navigate(
      ['/list'],
      {
        queryParams: {page},
        queryParamsHandling: 'merge'
      }
    ).then();
  }
}
