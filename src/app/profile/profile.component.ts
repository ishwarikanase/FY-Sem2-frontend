import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username;
  email;
  profileForm:FormGroup;
  myProfile:[];
  
  constructor(private fb:FormBuilder,private httpService:HttpServiceService) { }

  ngOnInit() {
    this.httpService.getServiceCall('profile',true).subscribe(res=>{
      this.myProfile=res['user'];
      this.username=this.myProfile['username'];
      this.email=this.myProfile['email'];
    },err=>{
      console.log(err);
    })
    this.profileForm=this.fb.group({
      username:[''],
      email:['',Validators.email],
      password:['']
    });

  }

  onSubmit(){

  }
}
