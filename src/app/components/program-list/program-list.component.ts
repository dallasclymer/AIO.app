import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnInit {
  public list: any;

  constructor() { 
    this.list = [
      {
        "programId": "8ba2c2be-8dc4-4d1f-8533-15b52f064799",
        "name": "Adult Hockey Programs",
        "desc": "Welcome to the XYZ Sports Facility Adult Hockey and Adult Learn to Play programs.",
        "image": "/assets/images/adult-hockey.jpeg",
        "location": "Michigan Rink",
        "locationId": "1177a006-0576-4c6c-b594-bf53df8e2783"
      },
      {
        "programId": " 41f5b310-6479-d52f-c285-8bbe8dc4a239",
        "name": "Drop-In Hockey",
        "desc": "Drop-in hockey at XYZ!",
        "image": "/assets/images/drop-in-hockey.jpeg",
        "location": "Michigan Rink",
        "locationId": "1177a006-0576-4c6c-b594-bf53df8e2783",
      },
      {
        "programId": "15b52f064799-8533--4d1f--8dc4-8ba2c2be",
        "name": "Figure Skating",
        "desc": "Welcome to the XYZ Sports Facility Figure Skating programs!",
        "image": "/assets/images/figure-skating.jpeg",
        "location": "Ohio Rink",
        "locationId": "4f8dab4c-96d8-4ddf-9d80-8b70501f84dd",
      },
    ]




  }

  ngOnInit(): void {
    
  }

}
