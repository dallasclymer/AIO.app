import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  faUserLock = faUserLock;
  faGoogle = faGoogle;

  constructor(public authService: AuthService) { }
  ngOnInit(): void { }
}
