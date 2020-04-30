import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  display: boolean;

  list = [];

  constructor(private router: Router, private route: ActivatedRoute, private httpService: HttpServiceService) { }

  ngOnInit() {
    this.httpService.getServiceCall('allActivities/ALL', true).subscribe(res => {
      this.list = res['activities'];
    }, err => {
      console.log(err);
    })
  }
  removeAddress() {
  }

}
