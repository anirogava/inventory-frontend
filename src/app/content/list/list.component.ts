import { Component, OnInit } from '@angular/core';
import { Address, Inventory } from '../content.model';
import { Pagination } from '../models/pageination';
import { storeService } from '../services/store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';

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
    page: 1,
    filters: {
      userId: null,
    },
  };
  search: string = '';

  get emptySting(): string {
    return EMPTY;
  }

  constructor(
    private service: storeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {}

  deleteInventory(id: number) {
    this.service.remove(id).subscribe((res) => {
      console.log(res);
    });
  }

  loadData() {
    this.service
      .getList(
        this.pagination.offset,
        this.pagination.limit,
        this.pagination.filters
      )
      .subscribe((res) => {
        this.inventoryList = res.items;
        this.pagination.count = res.count;
        this.pagination.pages = Math.round(res.count / this.pagination.limit);
      });
  }

  counter(i: number) {
    return new Array(i);
  }

  ngOnInit() {
    this.pagination.page = parseInt(
      this.activatedRoute.snapshot.queryParamMap.get('page') || '1'
    );
    this.pagination.offset =
      this.pagination.page * this.pagination.limit - this.pagination.limit;
    this.loadData();
  }

  changePage(page: number) {
    if (this.pagination.page == page) {
      return;
    }
    this.pagination.page = page;
    this.pagination.offset =
      this.pagination.page * this.pagination.limit - this.pagination.limit;
    this.loadData();
    this.router
      .navigate(['/list'], {
        queryParams: { page },
        queryParamsHandling: 'merge',
      })
      .then();
  }

  userList() {
    this.pagination.filters.userId = this.auth.user?.id;
    this.loadData();
  }
}
