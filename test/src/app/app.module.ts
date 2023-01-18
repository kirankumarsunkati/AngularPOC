import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { FormsModule } from '@angular/forms';
import { AppComponentt } from './app.componentt';
import { AppComponenttt } from './app.componenttt';
import { AppComponenttt as dashboard } from './Dashboard/app.componenttt';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AppComponentt,
    AppComponenttt,
	dashboard
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MaterialModuleModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
 }
