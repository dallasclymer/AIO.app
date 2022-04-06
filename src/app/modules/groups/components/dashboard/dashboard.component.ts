import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public model: any;

  constructor() { 
    this.model = {title: "Velociraptors", desc: "Geeks that can play!"};
  }

  ngOnInit(): void { }

}
