import { Component, OnInit } from '@angular/core';
import { NaveNoTripulada } from '../crear-nave/tipos/nave-noTripulada';
import { NaveTripulada } from '../crear-nave/tipos/nave-tripulada';
import { NaveLanzadera } from '../crear-nave/tipos/nave-lanzadera';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
