import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [DecimalPipe]
})
export class TableComponent {
  @Input() data: any;
  @Input() columnHeaders: any;

  constructor() { }

  ngOnInit(): void { }

}
