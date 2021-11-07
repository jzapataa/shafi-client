import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/component/home.component';
import { HeaderComponent } from './header/component/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/component/login.component';
import { RegisterComponent } from './register/component/register.component';
import { FormsModule } from '@angular/forms';
import { UserEditComponent } from './user/components/user-edit/user-edit.component';
import { ExpenseCreateComponent } from './expense/components/expense-create/expense-create.component';
import { ExpensesComponent } from './expense/components/expenses/expenses.component';
import { HistoryComponent } from './history/component/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    UserEditComponent,
    ExpenseCreateComponent,
    ExpensesComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
