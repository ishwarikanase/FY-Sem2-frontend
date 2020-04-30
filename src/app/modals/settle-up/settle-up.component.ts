import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-settle-up',
  templateUrl: './settle-up.component.html',
  styleUrls: ['./settle-up.component.scss']
})
export class SettleUpComponent implements OnInit {

  constructor(private ref:DynamicDialogRef) { }

  ngOnInit() {
  }

  onSubmit(){
    this.ref.close();
  }
  cancel(){
    this.ref.close();
  }
}
