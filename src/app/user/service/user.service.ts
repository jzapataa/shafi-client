import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from 'src/app/global';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
  })
  export class UserService {

    public url: string;
    public identity;
    public token;

    constructor(
        private _http: HttpClient) { 
        this.url = Global.url;
    }
    
    register(user): Observable<any>{
        let params = JSON.stringify(user);
    
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
        return this._http.post(this.url+'register', params, {headers: headers});
      }
    
      signup(user, gettoken = null): Observable<any>{
    
        if(gettoken != null){
          user.gettoken = gettoken;
        }
    
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
        return this._http.post(this.url+'login', params, {headers: headers});
        
      }
    
      getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));
    
        if(identity && identity != null && identity != "undefined" && identity != undefined){
          this.identity = identity;
        }else{
          this.identity = null;
        }
    
        return this.identity;
      }
    
      getToken(){
        let token = localStorage.getItem('token');
    
        if(token && token != null && token != "undefined"){
          this.token = token;
        }else{
          this.token = null;
        }
    
        return this.token;
      }


      updateUser(user: User):Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());

        return this._http.put(this.url+'update-user/'+ user._id, params, {headers: headers});
      }

  }