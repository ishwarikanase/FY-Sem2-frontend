import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataShareService } from '../data-share.service';
import { HttpServiceService } from '../services/http-service.service';
import { SharedServiceService } from '../services/shared-service.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  token: any;
  success: boolean;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private dataShare: DataShareService, private httpService: HttpServiceService, private sharedService: SharedServiceService) { }

  ngOnInit() {
    this.dataShare.currentHeader.subscribe(success => this.success = success)
    this.loginForm = this.fb.group({
      email: ['', Validators.email],
      password: ['']
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.httpService.postServiceCall('login', this.loginForm.value, false).subscribe(res => {
        this.sharedService.setLocalStorage("token", res['token']);
        this.sharedService.setLocalStorage("user", res['user']);
        this.router.navigate(['dashboard']);
        this.dataShare.changeHeader(true);
      }, err => {
        console.log("err", err);
      });
    } else {
      alert("user form is not valid");
    }
  }

}
