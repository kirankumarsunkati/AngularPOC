import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserForm } from './user-form';
@Component({
  selector: 'app-root',
  templateUrl: './app.componentt.html',
  styleUrls: ['./app.componentt.css']
})
export class AppComponentt {
  constructor(private router: Router){}
  title = 'my-app';
  userModel = new UserForm("","");
  dashboard(){
    this.router.navigate(['dashboard']);
  }
  onSubmit(){
    this.router.navigate(['dashboard']);
  }
}
