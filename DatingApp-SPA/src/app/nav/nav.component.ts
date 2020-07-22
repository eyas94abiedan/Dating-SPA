import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(protected authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loggedin();
  }
  login() {
    this.authService.login(this.model).subscribe(next => { this.alertify.success('loged in successfully'); },
      error => { this.alertify.error(error); });
  }
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out successfully');
  }
  loggedin() {
    return this.authService.loggedin();
  }

}
