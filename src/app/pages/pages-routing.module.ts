import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearNaveComponent } from './crear-nave/crear-nave.component';
import { MainComponent } from './main/main.component';
import { NavesComponent } from './naves/naves.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:[
      {
        path: '',
        component: CrearNaveComponent
      },
      {
        path: 'naves',
        component: NavesComponent
      },
      
    ]
  },
]


@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }
