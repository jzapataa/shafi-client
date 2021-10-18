import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/models/user';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public page_title: string;
  public user: User;
  public status;
  public message;
  
  constructor(
    private _userService: UserService
  ) {
    this.page_title = 'Registro';
    this.user = new User('','','','','','','','');
   }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(this.user);
    this._userService.register(this.user).subscribe( 
      response => {
        console.log(this.user);
        console.log(response.user);
        if(response.user && response.user._id){
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
