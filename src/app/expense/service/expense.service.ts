import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../user/service/user.service';
import { Global } from 'src/app/global';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  public url: string;
  public token;

  constructor(private _http: HttpClient,
    private _userService: UserService) {
    this.url = Global.url;
  }

  addExpense(expense, token): Observable<any> {
    let params = JSON.stringify(expense);

    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this._userService.getToken());

    return this._http.post(this.url + 'expense', params, {headers: headers});
  }

  getExpenses(token): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this._userService.getToken());

    return this._http.get(this.url+'expenses', {headers: headers});
  }

  getExpensesLimit(token): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this._userService.getToken());

    return this._http.get(this.url+'expenses-limit', {headers: headers});
  }
}
