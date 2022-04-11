import { Component, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-program-filter',
  templateUrl: './program-filter.component.html',
  styleUrls: ['./program-filter.component.scss']
})
export class ProgramFilterComponent {
  @Input() programID: any;
  @Input() filteredParams: any;
  
  filterForm = new FormGroup({
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

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.filterForm.value);
  }

  constructor() { }

  public test() {
    console.warn('test');
  }

  ngOnInit(): void {
  }

}
