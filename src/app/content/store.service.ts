import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { inventory, inventoryResult } from './content.model';

@Injectable({
  providedIn: 'root',
})
export class storeService {
  constructor(private _http: HttpClient) {}
  apiUrl = 'http://localhost:1000/list';

  getAllList(): Observable<inventoryResult[]> {
    return this._http.get<inventoryResult[]>(`${this.apiUrl}`);
  }
  deletedata(inventoryResult: inventoryResult): Observable<inventoryResult[]> {
    return this._http.delete<inventoryResult[]>(
      `${this.apiUrl}/:${inventoryResult.id}`
    );
  }
  postData(data: inventory): Observable<inventory[]> {
    return this._http.post<inventory[]>(`${this.apiUrl}`, data);
  }
}
