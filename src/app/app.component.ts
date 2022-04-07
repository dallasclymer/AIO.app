import { Component } from '@angular/core';
import { AuthService } from './modules/shared/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AIO.app';

  constructor(public authService: AuthService) {}
  
}
