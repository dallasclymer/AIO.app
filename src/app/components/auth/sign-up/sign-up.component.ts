import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../modules/shared/services/auth.service';

import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  faUserLock = faUserLock;
  faGoogle = faGoogle;

  constructor(public authService: AuthService) { }
  ngOnInit(): void {}
}