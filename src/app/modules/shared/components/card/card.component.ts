import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public title = new String;
  public desc = new String;

  constructor() { }

  public ngOnInit(): void {
    this.title = "Velociraptors";
    this.desc = "Geeks that can play!";    
  }

}
