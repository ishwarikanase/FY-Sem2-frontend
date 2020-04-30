import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  groupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpServiceService,
    private sharedService: SharedServiceService
  ) {}
  myEmail: string;
  user;
  list = [];
  
  ngOnInit() {
    this.showFriends();
    this.myEmail = this.sharedService.getLocalStorage("user").email;
    console.log(this.myEmail);
    this.user = this.sharedService.getLocalStorage("user");
    this.groupForm = this.fb.group({
      groupName: [''],
      members: this.fb.array([this.fb.group({ id: [''] })])
    });
  }

  changeCity(event) {
    console.log(event.value);
  }

  showFriends() {
    this.httpService.getServiceCall('myFriends', true).subscribe(res => {
      this.list = res['user'];
    }, err => {
      console.log("err", err);
    });
  }

  get members() {
    return this.groupForm.get('members') as FormArray;
  }

  onSubmit() {
    const body = {
      groupName: this.groupForm.value.groupName,
      groupMembers: this.groupForm.value.members.map(ele => { return ele.id })
    };
    body.groupMembers.push(this.user);

    if (this.groupForm.valid) {
      this.httpService.postServiceCall('group', body, true).subscribe(res => {
        this.router.navigate(['../dashboard'], { relativeTo: this.route });
      }, err => {
        console.log("err", err);
      });
    } else {
      console.log("you are in else");
    }

  }

  removeAddress(i) {
    this.members.removeAt(i);
  }
  addPerson() {
    this.members.push(this.fb.group({ id: '' }));
  }

}
