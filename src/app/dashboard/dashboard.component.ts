import { Component, OnInit } from '@angular/core';
// import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Router, ActivatedRoute } from '@angular/router';
import { AddExpenseComponent } from '../modals/add-expense/add-expense.component';
import { DialogService } from 'primeng/dynamicdialog';
import { SettleUpComponent } from '../modals/settle-up/settle-up.component';
import { HttpServiceService } from '../services/http-service.service';
import { SharedServiceService } from '../services/shared-service.service';
// import {DynamicDialogRef} from 'primeng/dynamicdialog';
// import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DialogService]
})
export class DashboardComponent implements OnInit {

  titleArray = [];
  friendList = [];
  groupList = [];
  title;
  // owe = 0;
  // owed: number = 0;
  // total: number = 0;
  // list = [];
  constructor(private router: Router, private route: ActivatedRoute, private dialogService: DialogService, private httpService: HttpServiceService, private sharedService: SharedServiceService, private dataShare: DataShareService) { }

  ngOnInit() {
    // this.calculations();
    this.showFriends();
    this.showGroups();
    // console.log(window.location.href);
    this.titleArray = this.router.url.split('/');
    this.title = (this.titleArray[this.titleArray.length - 1].toUpperCase());

  }

  // calculations() {
  //   this.httpService.getServiceCall('/profile', true).subscribe(res => {
  //     this.list = res['user'].friendsExpense;
  //     console.log(this.list);
  //     for (let i = 0; i < this.list.length; i++) {
  //       if (this.list[i].owe > 0) {
  //         this.owed = this.owed + this.list[i].owe;
  //         console.log(this.owed);

  //       }
  //       else if (this.list[i].owe < 0) {
  //         this.owe = this.owe + this.list[i].owe;
  //         console.log(this.owe);
  //       }
  //     }
  //     this.total = this.owed + this.owe;
  //   }, err => {
  //     console.log(err);
  //   });
  // }s

  showFriends() {
    this.httpService.getServiceCall('myFriends', true).subscribe(res => {
      this.friendList = res['user'];
    }, err => {
      console.log("err", err);
    });
  }

  showGroups() {
    this.httpService.getServiceCall('myGroups', true).subscribe(res => {
      this.groupList = res['user'].usergroups;
    }, err => {
      console.log("err", err);
    });
  }

  dashboard() {
    this.title = "Dashboard";
    this.router.navigate(['dashboard']);
  }

  recent() {
    this.title = "Recent";
    this.router.navigate(['recent'], { relativeTo: this.route });
  }

  all() {
    this.title = "Expenses";
    this.router.navigate(['expenses'], { relativeTo: this.route });
  }

  createGroups() {
    this.router.navigate(['../groups']);
  }

  inviteFriends() {
    this.router.navigate(['../friends']);
  }

  groups(group) {
    this.router.navigate(['expenses'], { relativeTo: this.route });
  }

  friends(friend) {
    this.router.navigate(['expenses'], { relativeTo: this.route });
  }

  openAddDialog() {
    const ref = this.dialogService.open(AddExpenseComponent, {
      header: 'Add an expense',
      width: '50%'
    });
    ref.onClose.subscribe(() => {
      console.log("hello");
      this.dataShare.changeValues(true);
    })
  }
  openSettleDialog() {
    const ref = this.dialogService.open(SettleUpComponent, {
      header: 'Setlle Up',
      width: '25%'
    });
  }

}
