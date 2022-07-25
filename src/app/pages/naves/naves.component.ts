import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NaveNoTripulada } from '../crear-nave/tipos/nave-noTripulada';
import { NaveTripulada } from '../crear-nave/tipos/nave-tripulada';
import { NaveLanzadera } from '../crear-nave/tipos/nave-lanzadera';
import { NaveLuz } from '../crear-nave/tipos/nave-luz';
import { Nave } from 'src/app/interface/nave.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  public tipos: any[] = ['Nave de Lanzadera', 'Nave de Luz', 'Nave no Tripulada', 'Nave Tripulada'];
  public tipo:any[]=[];

  public navesPorDefecto: Nave[] = [];
  public navesIniciales: Nave[] = [];
  public naves: any[] = [];


  public nave:NaveLanzadera = new NaveLanzadera('', '', '', 0, '', '');
  public naveLuz:NaveLuz = new NaveLuz('', '', '', 0, '', '');
  public naveNoTripulada:NaveNoTripulada = new NaveNoTripulada('', '', '', 0, '', '');
  public naveTripulada:NaveTripulada = new NaveTripulada('', '', '', 0, '', 0 , '');

  constructor( private router: Router ) { }

  ngOnInit(): void {
    
    this.navesPorDefecto.push( this.nave.creandoNave( 'Saturno V', '10000', '5000', 30000, 'Nave de Lanzadera', '') );
    this.navesPorDefecto.push( this.nave.creandoNave( 'Atlas V', '10000', '58000', 546700, 'Nave de Lanzadera', '') );
    this.navesPorDefecto.push( this.nave.creandoNave( 'Delta IV', '110000', '46000', 733400, 'Nave de Lanzadera', '') );
    this.navesPorDefecto.push( this.naveLuz.creandoNave( 'SpaceLight I', '100000', '80000', 385000, 'Nave de Luz', '' ) );
    this.navesPorDefecto.push( this.naveLuz.creandoNave( 'Here!', '300000', '299792', 80000, 'Nave de Luz', '' ) );
    this.navesPorDefecto.push( this.naveLuz.creandoNave( 'Space II', '76000', '299792', 50000, 'Nave de Luz', '' ) );
    this.navesPorDefecto.push( this.naveNoTripulada.creandoNave( 'Soho V', '900', '500', 9525, 'Nave no Tripulada', '' ) );
    this.navesPorDefecto.push( this.naveNoTripulada.creandoNave( 'Explorer', '10000', '30000', 475000, 'Nave no Tripulada', '' ) );
    this.navesPorDefecto.push( this.naveNoTripulada.creandoNave( 'Mariner IV', '60000', '98500', 60000, 'Nave no Tripulada', '' ) );
    this.navesPorDefecto.push( this.naveTripulada.creandoNave( 'Dragon V2', '9000', '500', 9250, 'Nave Tripulada', '' ) );
    
    this.cargarLocalStorage();
    this.navesIniciales = this.navesPorDefecto;
  }

  cargarLocalStorage() {

    this.naves = [];

    this.naves.push(JSON.parse(localStorage.getItem( 'Nave de Lanzadera' ) ! ));
    this.naves.push(JSON.parse(localStorage.getItem( 'Nave de Luz' ) ! ));
    this.naves.push(JSON.parse(localStorage.getItem( 'Nave no Tripulada' )!));
    this.naves.push(JSON.parse(localStorage.getItem( 'Nave Tripulada' )! ));


    const navesExistentes:any[] = this.naves.filter( el => el != null );

    navesExistentes.find( elem => {
      elem.forEach( (data:any) => {
      this.navesPorDefecto.push(data)
      });
   });

  }

  verAcciones( index: number) {

    switch ( this.navesPorDefecto[index].tipo ) {

      case 'Nave de Lanzadera': {
        this.nave.transportarSatelite();
        break;
      }

      case 'Nave de Luz':{
        this.naveLuz.viajarAOtraGalaxia();
        break;
      }
        

      case 'Nave no Tripulada': {
        this.naveNoTripulada.mandarInformacion();
        break;
      }

      case 'Nave Tripulada': {
        this.naveTripulada.irALaLuna();
        break;
      }
    
      default:
        break;
    }
    
  }

  CrearNave() {

    this.router.navigateByUrl('estacionSofka/crear-nave')
  }

  eliminarNave( index: number ) {

    this.navesPorDefecto.splice(index, 1);

  }

  buscar() {


    let valor = this.txtBuscar.nativeElement.value;

    let expresion = new RegExp(`${ valor }.*`, 'i' )
    let busqueda = this.tipo.filter( elem => expresion.test(elem.nombre + elem.potencia + elem.velocidad + elem.peso) );

    this.navesPorDefecto = busqueda;

  }

  buscarTipo( termino: any ) {


    if( termino === 'none' ) {

      this.tipo = this.navesIniciales;
      return this.navesPorDefecto = this.navesIniciales;

    }

    this.navesPorDefecto = this.navesIniciales;

    let arr = this.navesPorDefecto.filter( e => e.tipo == termino );
      this.tipo = arr;
     return this.navesPorDefecto = arr;

  }

  

}
