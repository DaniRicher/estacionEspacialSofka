import { Component, OnInit } from '@angular/core';
import { NaveEspacial, _Nave } from 'src/app/models/nave-espacial';

@Component({
  selector: 'app-crear-nave',
  templateUrl: './crear-nave.component.html',
  styleUrls: ['./crear-nave.component.css']
})
export class CrearNaveComponent implements OnInit {

  public naves!: _Nave;
  public nave = new NaveEspacial( 'Jupiter V', '10000', '100K/s', 100 );

  constructor() { }

  ngOnInit(): void {
    
  }

}
