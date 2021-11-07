import { User } from 'src/app/user/models/user';

export class Expense {
  constructor(
    public _id: string,
    public name: string,
    public amount: number,
    public description: string,
    public date: Date,
    public user: User
  ) {}
}
