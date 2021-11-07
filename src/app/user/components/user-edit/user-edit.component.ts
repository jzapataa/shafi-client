import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'src/app/global';
import { UploadService } from 'src/app/services/upload.service';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService, UploadService]
})
export class UserEditComponent implements OnInit {

  public title: string;
  public user: User;
  public identity;
  public token;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _uploadService: UploadService
    ){
     this.title = 'Actualizar mis datos';
     this.user = this._userService.getIdentity();
     this.token = this._userService.getToken();
     this.identity = this._userService.getIdentity();
     this.url = Global.url;
   }

  ngOnInit(): void {
    
  }


  onSubmit(form){
    this._userService.updateUser(this.user).subscribe(
      response =>{
        if(!response.userUpdated){
          this.status = 'error'
        }else{
          this.status = 'success';
          localStorage.setItem('identity', JSON.stringify(this.user));
          this.identity = this.user;

          this._uploadService.makeFileRequest(this.url+'upload-image-user/'+this.user._id, [], this.filesToUpload, this.token, 'image')
                              .then((result: any ) =>{
                                  this.user.image = result.userUpdated.image;
                                  localStorage.setItem('identity', JSON.stringify(this.user));
                              });
        }
      },
      err =>{
        var errorMessage = <any>err;

        if(errorMessage != null){
          this.status = 'error'
        }
      }
    )
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
