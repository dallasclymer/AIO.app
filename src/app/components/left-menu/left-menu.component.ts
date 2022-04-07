import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../modules/shared/services/auth.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit(): void { }

}
