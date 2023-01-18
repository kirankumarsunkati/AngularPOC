import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.componentt.html',
  styleUrls: ['./app.component.css']
})
export class AppComponentt {
  constructor(private router: Router){}
  title = 'my-app';
  dashboard(){
    this.router.navigate(['dashboard']);
  }
}
