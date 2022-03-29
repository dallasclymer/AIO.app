import { Component, OnInit } from '@angular/core';

import { 
  faPerson,
  faChild,
  faPeopleGroup,
 } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  faPerson = faPerson;
  faChild = faChild;
  faPeopleGroup = faPeopleGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
