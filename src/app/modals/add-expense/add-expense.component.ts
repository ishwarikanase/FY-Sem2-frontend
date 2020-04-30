import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { HttpServiceService } from '../../services/http-service.service';
import { MenuItem } from 'primeng/api/menuitem';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})

export class AddExpenseComponent implements OnInit {
  totalExpense;
  afterSubmitShare: any = {};
  friendsList = [];
  groupList = [];
  list = [];
  event = [];
  event1 = [];
  menuItems: MenuItem[];
  flag = false;
  sharingType = true;
  types = [{ name: "equally", value: true }, { name: "unequally", value: false }];
  iterable = [];
  myId: any;
  myEmail;
  expenseForm: FormGroup;
  dialogService: any;
  constructor(private router: Router, private fb: FormBuilder, private route: ActivatedRoute, private ref: DynamicDialogRef, private httpService: HttpServiceService, private sharedService: SharedServiceService) { }

  ngOnInit() {
    this.myId = this.sharedService.getLocalStorage('user')._id;
    this.myEmail=this.sharedService.getLocalStorage('user').email;
    this.flag = false;
    this.showFriends();
    this.expenseForm = this.fb.group({
      consumersArray: this.fb.array([this.fb.group({
        consumer: [''],
      })]),
      description: ['', Validators.required],
      amount: ['', Validators.required],
      date: ['', Validators.required]
    });

  }

  proceedBtn() {
    this.flag = true;
    const sharedExpenses = this.expenseForm.value['amount'] / 2;
    if (this.expenseForm.value['consumersArray'].length >= 1) {
      this.iterable = this.event.map(item => {
        item['consumerExpense'] = sharedExpenses;
        item['totalAmount'] = this.expenseForm.value.amount;
        item['description'] = this.expenseForm.value.description;
        item['date'] = this.expenseForm.value.date.getTime();
        this.afterSubmitShare[item['email']] = sharedExpenses;
        return item;
      })
    }
  }

  showFriends() {
    this.httpService.getServiceCall('myFriends', true).subscribe(res => {
      this.friendsList = res['user'];
    }, err => {
      console.log("err", err);
    });
  }

  changeExpense(event) {
    this.event.push({ consumerId: event._id, consumerExpense: null, email: event.email, payerId: this.myId, totalAmount: null, description: null, date: null });
  }

  changeType(event1) {
    if (event1 == this.types[0]) {
      this.sharingType = true;
    }
    else {
      this.sharingType = false;
    }
  }

  get consumersArray() {
    return this.expenseForm.get('consumersArray') as FormArray;
  }

  onSubmit() {
    const array = this.iterable.map(item => {
      item['consumerExpense'] = this.afterSubmitShare[item['email']]
      delete item['email'];
      return item;
    });
    this.httpService.postServiceCall('addExpense', array[0], true).subscribe(res => {
      this.ref.close();
    }, err => {
      console.log("err", err);
    });
  }

  reset() {
    this.ngOnInit();
  }

  addPerson() {
    this.consumersArray.push(this.fb.group({ consumer: [''] }));
  }

  removeAddress(i) {
    this.consumersArray.removeAt(i);
  }

}
