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

  @Input() backgroundClass: any;
  @Input() colorClass: any



  @Input() bgClass: any;
  @Input() textClass: any;
  @Input() btnClass: any;
  @Input() iconClass: any;
  
  @Input() themeClass: any; // build a theme without above inputs
  
  public colorTheme: String;
  public backgroundColor: String;
  public textColor: String;
  public buttonColor: String;
  public borderColor: String;
  public footerColor: String;

  
  constructor() { }

  public ngOnInit(): void {
    // this.icon = this.faIcon;
    if (this.img === "") {
      console.warn("SRC was left blank on card component, ")
      this.img = "/assets/images/gray-placeholder-image.svg" // Created this for placeholder demo purposes
    } else if(this.img === undefined) {
      console.warn("No SRC given to card component, wont disply anything")
    }

    // String builder for dynamic class names. Uses bootrap color utilities

    if (this.colorClass) {
      this.backgroundClass = this.colorClass;
    }

    this.backgroundColor = !!this.backgroundClass ? "bg-" + this.backgroundClass + "" : 'bg-white';
    this.textColor = !!this.textClass ? "text-" + this.textClass + "" : 'text-secondary';
    this.borderColor = !!this.backgroundClass ? "border-" + this.backgroundClass + "" : 'border-secondary';
    this.footerColor = !!this.backgroundClass ? "bg-" + this.backgroundClass + "" : 'bg-dark';
    this.buttonColor = !!this.btnClass ? "btn-" + this.btnClass + "" : 'btn-outline-light';

    // if (this.backgroundClass) {
    //   this.backgroundColor = "bg-" + this.backgroundClass + "";
    // }

    // if (this.textClass) {
    //   this.textColor = "text-" + this.textClass + "";
    // }

    // if (this.colorClass) {
    //   this.borderColor = "border-" + this.colorClass + "";
    //   this.footerColor = "bg-" + this.colorClass + "";
    // }

    // if (this.btnClass) {
    //   this.buttonColor = "btn-" + this.btnClass + "";
    // }



    // if (this.bgClass) {
    //   this.colorTheme = "warning";
    //   this.backgroundColor = "bg-" + this.bgClass + "";
    //   this.borderColor = "border-" + this.colorTheme + "";
    //   this.footerColor = "bg-" + this.colorTheme + "";
    // }
    // if (this.textClass) {
    //   this.textColor = "text-" + this.textClass + "";
    // }
    // if (this.btnClass) {
    //   this.buttonColor = "btn-" + this.btnClass + "";
    // }

    // if (this.themeClass) {
    //   if (this.themeClass === 'dark') {
    //     let opColor: any = 'light';
    //     this.backgroundColor = "bg-" + this.themeClass + "";
    //     this.textColor = "text-" + opColor + "";
    //     let color = this.btnClass ? this.btnClass : opColor;
    //     this.buttonColor = "btn-outline-" + color + "";
    //   }
    // }

  }

}
