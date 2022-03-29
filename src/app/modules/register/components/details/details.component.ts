import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { FormBuilder, Validators, FormArray } from '@angular/forms';

import { 
  faPerson,
  faChild,
  faPeopleGroup,
 } from '@fortawesome/free-solid-svg-icons';

 interface model {
  type: string;
  name: string;
  icon: string;
  colorClass: string
  price: number;
  restrictions: string;
}

const model: model[] = [
  {
    type: 'person',
    name: 'Yourself',
    icon: 'faPerson',
    colorClass: 'text-warning',
    price: 19.99,
    restrictions: ''
  },
  {
    type: 'parent',
    name: 'Child',
    icon: 'faChild',
    colorClass: 'text-primary',
    price: 9.99,
    restrictions: 'Child must be at least 5 years of age and younger than 17 years of age'
  },
  {
    type: 'organizer',
    name: 'Group',
    icon: 'faPeopleGroup',
    colorClass: 'text-success',
    price: 75.00,
    restrictions: ''
  },

]


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  public registrationChoice: Subscription;
  public selected = new Object;
  public model:any = new Array;

  public faPerson = faPerson;
  public faChild = faChild;
  public faPeopleGroup = faPeopleGroup;


  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });

  constructor(public route: ActivatedRoute, private fb: FormBuilder) { }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  

  ngOnInit(): void {
    this.registrationChoice = this.route.params.subscribe(params => {
      // Call API service here to get data model.
      this.selected = params['registrationChoice'];

      // Logic since no API connection yet
      // Set icon to fontIcon variable since it needs the type 'IconDefinition' assigned
      if (this.selected === "yourself") {
        this.model = model[0];
        this.model.icon = faPerson;
      } else if (this.selected === "my-child") {
        this.model = model[1];
        this.model.icon = faChild;
      } else if (this.selected === "group") {
        this.model = model[2];
        this.model.icon = faPeopleGroup;
      } else {
        //Default to person registration
        this.model = model[0];
        this.model.icon = faPerson;
      }

    });
  }

  ngOnDestroy() {
    this.registrationChoice.unsubscribe();
  }

}
