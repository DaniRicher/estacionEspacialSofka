import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { NavesComponent } from './naves/naves.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CrearNaveComponent } from './crear-nave/crear-nave.component';



@NgModule({
  declarations: [
    MainComponent,
    NavesComponent,
    CrearNaveComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ],
  exports: [
    MainComponent,
  ]
})
export class PagesModule { }
