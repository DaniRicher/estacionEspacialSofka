import { Component, OnInit } from '@angular/core';
import { NaveNoTripulada } from '../crear-nave/tipos/nave-noTripulada';
import { NaveTripulada } from '../crear-nave/tipos/nave-tripulada';
import { NaveLanzadera } from '../crear-nave/tipos/nave-lanzadera';
import { NaveLuz } from '../crear-nave/tipos/nave-luz';
import { Nave } from 'src/app/interface/nave.interface';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {

  public navesPorDefecto: Nave[] = [];

  public nave:NaveLanzadera = new NaveLanzadera('', '', '', 0, '');
  public naveLuz:NaveLuz = new NaveLuz('', '', '', 0, '');
  public naveNoTripulada:NaveNoTripulada = new NaveNoTripulada('', '', '', 0, '');
  public naveTripulada:NaveTripulada = new NaveTripulada('', '', '', 0, '', 0);

  constructor() { }

  ngOnInit(): void {

    this.navesPorDefecto.push( this.nave.creandoNave() );
    this.navesPorDefecto.push( this.naveLuz.creandoNave() );
    this.navesPorDefecto.push( this.naveNoTripulada.creandoNave() );
    this.navesPorDefecto.push( this.naveTripulada.creandoNave() );

  }

  verAcciones( index: number) {

    switch ( this.navesPorDefecto[index].tipo ) {

      case this.nave.creandoNave().tipo: {
        this.nave.transportarSatelite();
        break;
      }

      case this.naveLuz.creandoNave().tipo:{
        this.naveLuz.viajarAOtraGalaxia();
        break;
      }
        

      case this.naveNoTripulada.creandoNave().tipo: {
        this.naveNoTripulada.mandarInformacion();
        break;
      }

      case this.naveTripulada.creandoNave().tipo: {
        this.naveTripulada.irALaLuna();
        break;
      }
    
      default:
        break;
    }
    
  }

}
