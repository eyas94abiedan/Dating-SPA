import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister: EventEmitter<boolean> = new EventEmitter();
  user: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }
  register() {
    this.authService.register(this.user).subscribe(response => { this.alertify.success('registered Successfully'); },
      error => { this.alertify.error(error); });
  }
  cancel() {
    this.cancelRegister.emit(false);
  }

}
