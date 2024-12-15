import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';





@Component({
  selector: 'app-login-signup',
  imports: [FormsModule, CommonModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {

  // activeForm: string = 'login'; // Default form is 'login'
  // register: string = 'register'; 

activeForm : 'login' | 'register' = 'register';

registerObj:registerModel = new registerModel ();
loginObj: LoginModel = new LoginModel();  
constructor(private _snackbar: MatSnackBar, private _router: Router) {

}
toggleForm(form: 'login' | 'register') {
  this.activeForm = form;
}
registerForm() 
{
  debugger

  const localusers = localStorage.getItem('users');
  if(localusers != null) {
    const users = JSON.parse(localusers);
    console.log(localusers);
    users.push(this.registerObj);
    localStorage.setItem('users', JSON.stringify(users));
    
    console.log(localusers);
  }else {
    const users = [];
    users.push(this.registerObj);
    localStorage.setItem('users', JSON.stringify(users));
    console.log(users);
  }
  this._snackbar.open('User register successfully', 'Close');
}
loginForm() {
  debugger;
  const localusers = localStorage.getItem('users');
  if(localusers != null) {
    const users = JSON.parse(localusers);
    const isUserExist = users.find((user:registerModel) => user.email == this.loginObj.email && user.password == this.loginObj.password)
    if(isUserExist != undefined) {
      this._snackbar.open('login Successfull', 'Close'); 
      // this._router.navigateByUrl('dashboard');
      this._router.navigateByUrl('/dashboard');
    }
    else {
      this._snackbar.open("email or Password is incorrent");
    }
  }
} 
}
export class registerModel {
  name: string;
  email: string;
  password: string;

  constructor () {
    this.name= "";
    this.email= "";
    this.password= "";
  }
}

export class LoginModel {
  email: string;
  password: string;

  constructor () {
    this.email= "";
    this.password= "";
  }
}