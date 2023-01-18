import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { AppComponentt } from './app.componentt'
import { AppComponenttt } from './app.componenttt'
import { AppComponenttt as dashboard } from './Dashboard/app.componenttt';

const routes: Routes = [
  { path: '', component: AppComponenttt },
  { path: 'products', component: AppComponentt },
  { path: 'dashboard', component: dashboard },
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }