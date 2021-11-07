import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/models/user';
import { UserService } from 'src/app/user/service/user.service';
import { Expense } from '../../model/expense';
import { ExpenseService } from '../../service/expense.service';

@Component({
  selector: 'app-expense-create',
  templateUrl: './expense-create.component.html',
  styleUrls: ['./expense-create.component.css']
})
export class ExpenseCreateComponent implements OnInit {

  public title;
  public expense: Expense;
  public identity;
  public token;

  public user: User;
  public status;
  public message;

  constructor(private _userService: UserService, private _expenseService: ExpenseService) {
    this.title = 'Agregar Gasto';
    this.identity = this._userService.getIdentity();
    this.expense = new Expense('','',0,'',new Date(), this.identity);
    this.token = this._userService.getToken();
   }

  ngOnInit(): void {
  }

  onSubmit(form){
    this._expenseService.addExpense(this.expense, this.token).subscribe( 
      response => {
        if(response.expenseStored){
          this.status = 'success';
          form.reset();
        }else{
          this.status = 'error';
          this.message = response.message;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  

}
