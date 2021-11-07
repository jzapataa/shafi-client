import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/expense/model/expense';
import { ExpenseService } from 'src/app/expense/service/expense.service';
import { Global } from 'src/app/global';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public expenses: Expense[]
  public token;
  public status: string;
  public url;
  
  constructor(private _userService: UserService,
    private _expenseService: ExpenseService) {
    this.token = this._userService.getToken();
    this.url = Global.url;
   }

   ngOnInit(): void {
    this.getExpense();
  }

  getExpense(){
    this._expenseService.getExpensesLimit(this.token).subscribe(
      response =>{
        console.log(response.expenses)
        if(!response.expenses){
          this.status = 'error';
        }else{
          this.status = 'success';
          this.expenses = response.expenses
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
