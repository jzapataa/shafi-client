import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user/models/user';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  public title: string;
  public status: string;
  public identity;
  public token;

  constructor(
    private _userService: UserService,
    private _router: Router, 
  ) { 
    this.title = "Identificate";
    this.user = new User('','','','','','','','');
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    this._userService.signup(this.user).subscribe(
      response => {
        if(response.user && response.user._id){
          this.identity = response.user;
          localStorage.setItem('identity', JSON.stringify(this.identity));

          this._userService.signup(this.user, true).subscribe(
            response => {
              if(response.token){
                  this.token = response.token;
                  localStorage.setItem('token', this.token);

                  this.status = 'success';
                  this._router.navigate(['/inicio']);

              }else{
                this.status = 'error';
              }
            }, 
            error =>{
              this.status = 'error';
          });
        
        }else{
          this.status = 'error';
        }

      }, 
      error =>{
        this.status = 'error';
    });
  }

}
