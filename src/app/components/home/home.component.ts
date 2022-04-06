import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../app/shared/services/auth.service';

// import { 
//   faClipboardList,
//   faMedal,
//   faCalendarDays
//  } from '@fortawesome/free-solid-svg-icons';

//  import { 
//   faClipboard
//  } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // faClipboardList = faClipboardList;
  // faClipboard = faClipboard;
  // faMedal = faMedal;
  // faCalendarDays = faCalendarDays;

  constructor(public authService: AuthService) {}

  ngOnInit(): void { }

}
