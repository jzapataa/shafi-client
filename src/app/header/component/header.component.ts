import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from 'src/app/global';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  public title: string = 'SHAFI';
  public identity;
  public token;
  public url;

  constructor(
    private _userService: UserService,
    private _router: Router,
  ) {
    this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.url = Global.url;
   }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }

  logout(){
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this._router.navigate(['/login']);
  }

}
