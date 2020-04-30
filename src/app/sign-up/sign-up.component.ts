import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private httpService: HttpServiceService, private messageService: MessageService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: [''],
      email: ['', Validators.email],
      password: ['']
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.httpService.postServiceCall('register', this.signupForm.value, false).subscribe(res => {
        this.messageService.clear();
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'successfully registration completed!' });
        this.router.navigate(['login']);
      }, err => {
        console.log("err", err);
      });
    } else {
      alert("user form is not valid");
    }
  }

}
