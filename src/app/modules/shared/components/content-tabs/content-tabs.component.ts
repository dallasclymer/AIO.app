import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-tabs',
  templateUrl: './content-tabs.component.html',
  styleUrls: ['./content-tabs.component.scss']
})
export class ContentTabsComponent implements OnInit {
  @Input() group = '';
  public active = new Number;

  constructor() { }

  public ngOnInit(): void {
    this.active = 1;
  }

}
