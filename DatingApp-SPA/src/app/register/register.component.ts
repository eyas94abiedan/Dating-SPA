import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister: EventEmitter<boolean> = new EventEmitter();
  user: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  register() {
    this.authService.register(this.user).subscribe(response => { console.log('registered Successfully'); },
      error => { console.log(error); });
  }
  cancel() {
    this.cancelRegister.emit(false);
  }

}
