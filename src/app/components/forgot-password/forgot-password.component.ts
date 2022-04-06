import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  faUserLock = faUserLock;
  faGoogle = faGoogle;

  constructor(public authService: AuthService) { }
  ngOnInit(): void {}
}