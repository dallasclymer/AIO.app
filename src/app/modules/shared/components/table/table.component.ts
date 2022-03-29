import { Component, PipeTransform, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface Data {
  activity: string;
  date: string;
  time: string;
  space: string;
}

const DATA: Data[] = [
  {
    activity: 'Flag Football',
    date: '3/26/22',
    time: '3:30 PM',
    space: 'King\'\s Landing Stadium'
  },
  {
    activity: 'Soccer Game',
    date: '3/26/22',
    time: '3:30 PM',
    space: 'Dorne Field'
  },
  {
    activity: 'Hockey Practice',
    date: '3/27/22',
    time: '3:30 PM',
    space: 'Baratheon Rink'
  },
  {
    activity: 'Hockey Practice',
    date: '3/29/22',
    time: '3:30 PM',
    space: 'Lannister Rink'
  },
  {
    activity: 'Soccer Practice',
    date: '4/2/22',
    time: '3:30 PM',
    space: 'Dorne Field'
  },
];

function search(text: string, pipe: PipeTransform): Data[] {
  return DATA.filter(data => {
    const term = text.toLowerCase();
    return data.activity.toLowerCase().includes(term) || pipe.transform(data.space).includes(term)
  });
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [DecimalPipe]
})
export class TableComponent {
  data$: Observable<Data[]>;
  filter = new FormControl('');

  constructor(pipe: DecimalPipe) { 
    this.data$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }

  ngOnInit(): void {
    
  }

}
