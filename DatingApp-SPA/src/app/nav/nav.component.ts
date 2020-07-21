import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loggedin();
  }
  login() {
    this.authService.login(this.model).subscribe(next => { console.log('loged in successfully'); },
      error => { console.log('failed to log in'); });
  }
  logout() {
    localStorage.removeItem('token');
    console.log('logged out successfully');
  }
  loggedin() {
    const token = localStorage.getItem('token');
    return !!token;
  }

}
