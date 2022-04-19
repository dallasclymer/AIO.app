import { Component, OnInit } from '@angular/core';
// import {Observable, OperatorFunction } from 'rxjs';
// import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

// const test = [];

interface Locations {
  options: Object;
  selected: String;
}

interface Activities {
  options: Object;
  selected: String;
}

interface Filters {
  locations: Locations;
  activities: Activities;
}

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnInit {
  public list;
  public filteredList;

  public filters: Filters;

  public model: any;
  public programActivityOptions: any;
  public programLocationOptions: any;

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
      {
        "programId": "",
        "name": "Hockey Classes and Lessons",
        "desc": "Group skating and hockey lessons at XYZ Sports Facility! ",
        "image": "",
        "location": "Ohio Rink",
        "locationId": "4f8dab4c-96d8-4ddf-9d80-8b70501f84dd",
      },
      {
        "programId": "",
        "name": "Learn to Play",
        "desc": "Welcome to the XYZ Learn to Play program.",
        "image": "",
        "location": "Ohio Rink",
        "locationId": "4f8dab4c-96d8-4ddf-9d80-8b70501f84dd",
      },
      {
        "programId": "",
        "name": "Learn to Skate",
        "desc": "Welcome to the XYZ Skating Academy's Learn to Skate Program.",
        "image": "",
        "location": "Ohio Rink",
        "locationId": "4f8dab4c-96d8-4ddf-9d80-8b70501f84dd",
      },
      {
        "programId": "",
        "name": "Public Skate",
        "desc": "Welcome to the XYZ Sports Facility Public Skate!",
        "image": "",
        "location": "Ohio Rink",
        "locationId": "4f8dab4c-96d8-4ddf-9d80-8b70501f84dd",
      },
      {
        "programId": "",
        "name": "Stick & Puck",
        "desc": "Stick & Puck at XYZ!",
        "image": "",
        "location": "Ohio Rink",
        "locationId": "4f8dab4c-96d8-4ddf-9d80-8b70501f84dd",
      },
      {
        "programId": "",
        "name": "Tot Play Hour",
        "desc": "Come join us for some fun on the ice with your little one! There will be balls, seals, and snow out for open play on the ice. ",
        "image": "",
        "location": "Ohio Rink",
        "locationId": "4f8dab4c-96d8-4ddf-9d80-8b70501f84dd",
      },
      {
        "programId": "",
        "name": "Youth Hockey",
        "desc": "Welcome to XYZ Youth Hockey. ",
        "image": "",
        "location": "Ohio Rink",
        "locationId": "4f8dab4c-96d8-4ddf-9d80-8b70501f84dd",
      }
    ]

    // this.filters = {selectedLocation: '', locations: [...new Set (this.list.map(x => x.location))], activity: '', activities: [...new Set (this.list.map(x => x.name))]};
    // this.filteredList = this.list.filter(x => x.location ? x.location : this.filters.location === x.location);
    this.filteredList = this.list.filter;

    this.filters = {
      locations: {
        options: [...new Set (this.list.map(x => x.location))],
        selected: ''
      },
      activities: {
        options: [...new Set (this.list.map(x => x.name))],
        selected: ''
      }
    };
    

  }

  // this.test = map(term => term);

  // search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     map(term => term.length < 2 ? []: this.list.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  //   )

  ngOnInit(): void {
    this.programActivityOptions = this.list.map(term => term.name);
    this.programLocationOptions = this.list.map(term => term.location);
    this.programLocationOptions = [...new Set(this.programLocationOptions)];
  }

}
