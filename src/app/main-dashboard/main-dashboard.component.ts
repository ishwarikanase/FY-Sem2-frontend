import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  owe = 0;
  owed = 0;
  total = 0;
  list = [];


  constructor(private router: Router, private route: ActivatedRoute, private httpService: HttpServiceService, private dataShare: DataShareService) { }

  ngOnInit() {

    this.calculations();
    this.dataShare.current.subscribe(success => {
      if (success) {
        console.log("Main");
        this.owe = 0;
        this.owed = 0;
        this.total = 0;
        this.list = [];
        this.calculations();
      }
    });
  }

  calculations() {

    this.httpService.getServiceCall('/profile', true).subscribe(res => {
      this.owe = 0;
      this.owed = 0;
      this.total = 0;
      this.list = [];
      this.list = res['user'].friendsExpense;
      console.log(this.list);
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].owe > 0) {
          this.owed = this.owed + this.list[i].owe;
          console.log(this.owed);

        }
        else if (this.list[i].owe < 0) {
          this.owe = this.owe + this.list[i].owe;
          console.log(this.owe);
        }
      }
      this.total = this.owed + this.owe;
    }, err => {
      console.log(err);
    });
  }

  show() {
    this.router.navigate(['expenses'], { relativeTo: this.route });
  }
}
