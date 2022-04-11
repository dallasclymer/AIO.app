import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-program-series',
  templateUrl: './program-series.component.html',
  styleUrls: ['./program-series.component.scss']
})
export class ProgramSeriesComponent {
  @Input() programSeries: any;

  // TODO: Initialize API service
  constructor() { }

  ngOnInit(): void {
    // TODO: Call API service to get more data
  }

}
