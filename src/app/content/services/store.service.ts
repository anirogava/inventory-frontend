import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {environment} from 'src/environments/environment';
import {Inventory, InventoryResult} from '../content.model';

@Injectable({
  providedIn: 'root',
})
export class storeService {
  constructor(private _http: HttpClient) {
  }

  getList(offset: number = 0, limit: number = 10): Observable<InventoryResult> {
    let params = new HttpParams().append("offset", offset.toString());
    params = params.append("limit", limit);
    return this._http.get<InventoryResult>(`${environment.baseUrl}/list`, {params});
  }

  remove(id: number): Observable<{ message: string }> {
    return this._http.delete<{ message: string }>(`${environment.baseUrl}/list/${id}`);
  }

  postData(data: Inventory): Observable<Inventory[]> {
    return this._http.post<Inventory[]>(`${environment.baseUrl}/list`, data);
  }
}
