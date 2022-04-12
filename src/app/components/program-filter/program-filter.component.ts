import { Component, Input, Output, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-program-filter',
  templateUrl: './program-filter.component.html',
  styleUrls: ['./program-filter.component.scss']
})
export class ProgramFilterComponent implements OnInit {
  @Input() programID: any;
  @Input() filteredParams: any = {};

  // control: FormControl;
  
  public filterForm = new FormGroup({
    activities: new FormControl(''),
    locations: new FormControl(''),
    activity: new FormControl(''),
    location: new FormControl(''),
    timeOfYear: new FormControl(''),
    gender: new FormControl(''),
    skillLevel: new FormControl('')
  });
  // profileForm = new FormGroup({
  //   location: new FormControl(''),
  //   activity: new FormControl(''),
  //   timeOfYear: new FormControl(''),
  //   gender: new FormControl(''),
  //   skillLevel: new FormControl('')
  // });


  constructor(private fb: FormBuilder) { 
    // this.control  = fb.control({value: 'my val', disabled: true});
    // this.filteredParams['locations']['selected'] = 'test';
    // this.filterForm.value.location;
  }

  ngOnInit(): void {
    // this.filteredParams['locations']['selected'] = this.filterForm.value.location;
    // Build filters for filter params input
    // for (const key in this.filteredParams) {
    //   console.warn(key)
    //   console.warn(this.filteredParams[key]);
    // }
  }
  

}
