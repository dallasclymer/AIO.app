import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnChanges {
  faUserLock = faUserLock;
  faGoogle = faGoogle;

  public loggedIn: boolean;

  private loginDetails = [];

  constructor(public authService: AuthService) {
    this.loggedIn = this.authService.isLoggedIn;
   }

  ngOnInit(): void {

    console.warn('loaded');
    console.warn(this.loggedIn)
   }

  ngOnChanges(changes: SimpleChanges): void {
      console.warn(changes);
      console.warn(this.loggedIn)
  }
}
