import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService } from '../data-share.service';
import { MenuItem } from 'primeng/api';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  success: boolean = null;
  items: MenuItem[];
  user: string = null;

  constructor(private router: Router, private dataShare: DataShareService, private sharedService: SharedServiceService) {

  }

  ngOnInit() {
    if (this.sharedService.getLocalStorage('token')) {
      this.success = true;
      console.log(this.success);
    }
    this.dataShare.currentHeader.subscribe(success => {
      if (success) {
        console.log(success);
        this.success = success;
      }
      if (this.success) {
        this.user = this.sharedService.getLocalStorage('user');
        console.log(this.user);
        this.setMenuItems();
      }
    });

  }

  setMenuItems() {
    this.items = [{
      label: this.user['email'],
      items: [
        {
          label: "Your account",
          command: () => {
            this.myAccount();
          }
        },
        {
          label: "Log out",
          command: () => {
            localStorage.clear();
            this.success = false;
            this.router.navigate(['login']);
          }
        }
      ]
    }]
  }

  myAccount() {
    this.router.navigate(['profile']);
  }


}
