import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  invitationGroup: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private httpService: HttpServiceService, private sharedService: SharedServiceService) { }

  ngOnInit() {
    this.invitationGroup = this.fb.group({
      email: ['', Validators.email]
    });
  }

  onSubmit() {
    if (this.sharedService.getLocalStorage("user").email === this.invitationGroup.value['email']) {
      alert("invalid data");
    }
    else {
      if (this.invitationGroup.valid) {
        this.httpService.postServiceCall('invite', this.invitationGroup.value, true).subscribe(res => {
          this.router.navigate(['../dashboard'], { relativeTo: this.route });
        }, err => {
          console.log("err", err);
        });
      } else {
        alert("user form is not valid");
      }
    }
  }

  back(){
    this.router.navigate(['../dashboard'], { relativeTo: this.route });
  }
}
