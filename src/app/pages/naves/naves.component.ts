import { Component, OnInit } from '@angular/core';
import { NaveNoTripulada } from '../crear-nave/tipos/nave-noTripulada';
import { NaveTripulada } from '../crear-nave/tipos/nave-tripulada';
import { NaveLanzadera } from '../crear-nave/tipos/vehiculo-lanzadera';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {

        private nombre: string = '';
        private potencia: string = '';
        private velocidad: string = '';
        private peso: number = 0;

  naveLanzadera: NaveLanzadera = new NaveLanzadera( this.nombre,this.potencia, this.velocidad, this.peso, );
  naveNoTripulada: NaveNoTripulada = new NaveNoTripulada( this.nombre,this.potencia, this.velocidad, this.peso );
  naveTripulada: NaveTripulada = new NaveTripulada( this.nombre,this.potencia, this.velocidad, this.peso );


  constructor() { }

  ngOnInit(): void {

    console.log('Nave Lanzadera', this.naveLanzadera.creandoNave() );  
    console.log('Nave No tripulada', this.naveNoTripulada.creandoNave() );
    console.log('Nave Tripulada', this.naveTripulada.creandoNave() );
    
  }

}
