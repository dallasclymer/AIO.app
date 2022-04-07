import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../modules/shared/services/auth.service';

@Component({
  selector: 'app-protected-view',
  templateUrl: './protected-view.component.html',
  styleUrls: ['./protected-view.component.scss']
})
export class ProtectedViewComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
  }

}
