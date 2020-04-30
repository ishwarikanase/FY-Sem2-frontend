import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  list = [];
  constructor(private router:Router,private route:ActivatedRoute,private httpService:HttpServiceService) { }
  show(){
    this.router.navigate(['../expenses'],{relativeTo:this.route});
  }

  ngOnInit() {
    this.httpService.getServiceCall('allActivities/ALL',true).subscribe(res=>{
      this.list=res['activities'];    
    },
    err=>{
      console.log(err);
    })
  }

}
