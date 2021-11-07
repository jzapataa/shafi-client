import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseCreateComponent } from './expense/components/expense-create/expense-create.component';
import { ExpensesComponent } from './expense/components/expenses/expenses.component';
import { HistoryComponent } from './history/component/history.component';
import { HomeComponent } from './home/component/home.component';
import { LoginComponent } from './login/component/login.component';
import { RegisterComponent } from './register/component/register.component';
import { UserEditComponent } from './user/components/user-edit/user-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'inicio', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegisterComponent},
  { path: 'mis-datos', component: UserEditComponent},
  { path: 'gastos', component: ExpensesComponent},
  { path: 'gastos/agregar', component: ExpenseCreateComponent},
  { path: 'history', component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
