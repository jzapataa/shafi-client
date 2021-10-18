import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from 'src/app/global';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  addExpense(expense): Observable<any> {
    let params = JSON.stringify(expense);

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + '');
  }
}
