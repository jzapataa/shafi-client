import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/global';
import { UserService } from 'src/app/user/service/user.service';
import { Expense } from '../../model/expense';
import { ExpenseService } from '../../service/expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  public expenses: Expense[]
  public token;
  public status: string;
  public title;
  public url;
  public amount_jorge: number = 0;
  public amount_marta: number = 0;

  constructor(
    private _userService: UserService,
    private _expenseService: ExpenseService
  ) {
    this.token = this._userService.getToken();
    this.title = "Gastos"
    this.url = Global.url;
   }

  ngOnInit(): void {
    this.getExpense();
  }

  getExpense(){
    this._expenseService.getExpenses(this.token).subscribe(
      response =>{
        if(!response.expenses){
          this.status = 'error';
        }else{
          this.status = 'success';
          this.expenses = response.expenses;

          this.expenses.forEach(obj =>{
            if(obj.user.name === 'Jorge'){
              this.amount_jorge += obj.amount;
            }
          });
          
          this.expenses.forEach(obj =>{
            if(obj.user.name === 'Marta'){
              this.amount_marta += obj.amount;
            }
          });
        } 
      },
      err =>{
        var errorMessage = <any>err;

        if(errorMessage != null){
          this.status = 'error';
        }
      }
    )
  }

}
