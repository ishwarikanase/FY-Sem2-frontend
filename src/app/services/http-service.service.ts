import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedServiceService } from './shared-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  readonly baseUrl = "http://localhost:3000/api/";
  headers: HttpHeaders;
  token: string;
  constructor(private http: HttpClient, private sharedService: SharedServiceService) { }

  getServiceCall(url: string, sendToken: boolean) {
    this.token = this.sharedService.getLocalStorage('token');
    if (sendToken) {
      this.headers = new HttpHeaders({
        "COntent-Type": "application/json",
        "Authorization": this.token
      });
    }
    else {
      this.headers = new HttpHeaders({
        "Content-Type": "application/json"
      });
    }
    return this.http.get(this.baseUrl + url, {
      headers: this.headers
    });
  }


  postServiceCall(url: string, body, sendToken: boolean) {
    this.token = this.sharedService.getLocalStorage('token');
    if (sendToken) {
      this.headers = new HttpHeaders({
        "COntent-Type": "application/json",
        "Authorization": this.token
      });
    }
    else {
      this.headers = new HttpHeaders({
        "Content-Type": "application/json"
      });
    }

    return this.http.post(this.baseUrl + url, body, {
      headers: this.headers
    })
  }
}
