import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

const MaterialComponent = [MatButtonModule, MatIconModule, MatSidenavModule]

@NgModule({
  imports: [MaterialComponent],
  exports:[MaterialComponent]
})
export class MaterialModuleModule { }
