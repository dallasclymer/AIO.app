import { Component, Input } from '@angular/core';
// import {faClipboard, faMedal, IconDefinition, faPerson } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: any;
  @Input() desc: any;
  @Input() img: any;
  @Input() avatar: boolean;
  // @Input() faIcon: any;
  @Input() btnText: any;
  @Input() btnRoute: any;

  // Uses bootrap color utilities as input. Examples: danger, info, warning
  // Builds classes for component. btn-danger, text-primary
  @Input() bgClass: any;
  @Input() textClass: any;
  @Input() btnClass: any;
  @Input() iconClass: any;
  
  @Input() themeClass: any; // build a theme without above inputs
  
  public backgroundColor: string;
  public textColor: string;
  public buttonColor: string;
  // public icon: IconDefinition;
  
  constructor() { }

  public ngOnInit(): void {
    // this.icon = this.faIcon;
    if (this.img === "") {
      console.warn("SRC was left blank on card component, ")
      this.img = "/assets/images/orange-placeholder-image.svg" // Created this for placeholder demo purposes
    } else if(this.img === undefined) {
      console.warn("No SRC given to card component, wont disply anything")
    }

    // String builder for dynamic class names. Uses bootrap color utilities
    // if (this.bgClass) {
    //   this.backgroundColor = "bg-" + this.bgClass + "";
    // }
    // if (this.textClass) {
    //   this.textColor = "text-" + this.textClass + "";
    // }
    // if (this.btnClass) {
    //   this.buttonColor = "btn-" + this.btnClass + "";
    // }

    if (this.themeClass) {
      if (this.themeClass === 'dark') {
        let opColor: any = 'light';

        this.backgroundColor = "bg-" + this.themeClass + "";
        this.textColor = "text-" + opColor + "";

        let color = this.btnClass ? this.btnClass : opColor;
        this.buttonColor = "btn-outline-" + color + "";

        // let oppositeColorClass = "light";
        // this.bgClass = "dark";
        // this.textClass = "light";

        // let color = this.btnClass ? this.btnClass : oppositeColorClass;
        // this.buttonColor = color;



        // this.backgroundColor = "bg-" + this.bgClass + "";
        // this.textColor = "text-" + oppositeColorClass + "";
        // this.buttonColor = "btn-" + oppositeColorClass + "";

      }
      //  else if (this.themeClass === 'light') {
      //   this.backgroundColor = "bg-" + this.bgClass + "";
      //   this.textColor = "text-" + this.themeClass + "";
      //   this.buttonColor = "btn-" + this.themeClass + "";
      // } else {
      //   this.backgroundColor = "bg-" + this.bgClass + "";
      //   this.textColor = "text-" + this.themeClass + "";
      //   this.buttonColor = "btn-" + this.themeClass + "";
      // }
      
    }

  }

}
