import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface SeriesFilter {
    location: String;
    activity: String;
    season: String;
    gender: String;
    skill: String;
    dayOfWeek: String;
};

interface series {
  //
}

interface programsCollection {
  programId: String;
  filter: SeriesFilter;
  series: Object;
}


@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit {
  programID: any;
  filteredParams: SeriesFilter;
  programs: programsCollection;

  // TODO: Initialize API service
  constructor(private route: ActivatedRoute) {}

  
  ngOnInit(): void {
    this.programID = this.route.snapshot.paramMap.get('id');
  // TODO: Call API service to get more data by id from thr route
  }

}
