import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.componenttt.html',
  styleUrls: ['./app.component.css']
})
@Injectable({  
	providedIn: 'root'  
})  
export class AppComponenttt {
  title = 'my-app';
  constructor(private router: Router,private $http: HttpClient){}

  opened = false;
  userModel = new User("","");
  onSubmit(){
    console.log(this.userModel);
    this.$http.get("http://localhost:8080/api/login").subscribe((data: any) => {
    console.log(data);
    })
    this.router.navigate(['products']);

  }
  dashboard(){
    alert("please login to proceed");
  }
}
