import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.componenttt.html',
  styleUrls: ['../app.component.css']
})
@Injectable({  
	providedIn: 'root'  
})  
export class AppComponenttt {
  title = 'my-app';
  constructor(private router: Router,private $http: HttpClient){}

  opened = false;
  userModel = new User("","");
  
  dashboard(){
    alert("please login to proceed");
  }
}
