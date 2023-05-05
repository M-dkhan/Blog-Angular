import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){}

 async onSubmit(){
    const credentials = this.loginForm.value;
    if (credentials.email && credentials.password){
        await this.authService.login(credentials.email, credentials.password)
        .subscribe(
          () => {
            console.log("user is logged in successfully");
          }
        );
  }
}
}