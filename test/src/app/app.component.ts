import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){}
  title = 'test';
  opened = false;
  userModel = new User("","");
  onSubmit(){
    console.log(this.userModel);
    this.router.navigate(['products']);
  }
  dashboard(){
    alert("please login to proceed");
  }
}
