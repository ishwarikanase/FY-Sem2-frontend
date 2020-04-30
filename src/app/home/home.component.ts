import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = " on trip.";

  alt:string="anyone";
  imagePath:string = "https://images.pexels.com/photos/862848/pexels-photo-862848.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  list = [
    { name:" on trip.",alt:"trips",class:"btn btn-success btn-sm",btnName: "trip", image: "https://images.pexels.com/photos/862848/pexels-photo-862848.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { name:" with housemates.",alt:"housemates",class:"btn btn-info btn-sm",btnName: "housemates", image: "https://images.pexels.com/photos/1267694/pexels-photo-1267694.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { name:" with your partner.",alt:"partner",class:"btn btn-secondary btn-sm",btnName: "partner", image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { name:" with anyone.",alt:"anyone",class:"btn btn-warning btn-sm",btnName: "anyone", image: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }
  ];
  constructor() { }

  ngOnInit() {
  }

  submit(item) {
    this.imagePath = item.image;
    this.title=item.name;
    this.alt=item.alt;
  }
}
