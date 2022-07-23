import { Component, OnInit } from '@angular/core';
import { NaveEspacial } from 'src/app/models/nave-espacial';
import { NaveLanzadera } from './tipos/vehiculo-lanzadera';

@Component({
  selector: 'app-crear-nave',
  templateUrl: './crear-nave.component.html',
  styleUrls: ['./crear-nave.component.css']
})
export class CrearNaveComponent implements OnInit {

        private nombre: string = '';
        private potencia: string = '';
        private velocidad: string = '';
        private peso: number = 0;
        private tarea: string = '';

  naveNoTripulada: NaveLanzadera = new NaveLanzadera( this.nombre,this.potencia, this.velocidad, this.peso );

  constructor() { }

  ngOnInit(): void {
  }

}
