import { User } from 'src/app/user/models/user';

export class Expense {
  constructor(
    public _id: string,
    public name: string,
    public amount: number,
    public date: string,
    public user: User
  ) {}
}
