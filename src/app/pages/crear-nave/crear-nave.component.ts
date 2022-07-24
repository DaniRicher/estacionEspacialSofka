import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Tipos de naves
import { NaveNoTripulada } from './tipos/nave-noTripulada';
import { NaveLanzadera } from './tipos/nave-lanzadera';
import { NaveLuz } from './tipos/nave-luz';
import { NaveTripulada } from './tipos/nave-tripulada';


//Alertas
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-nave',
  templateUrl: './crear-nave.component.html',
  styleUrls: ['./crear-nave.component.css']
})
export class CrearNaveComponent implements OnInit {

  miFormulario!: FormGroup;

  public naves: any[] = [];
  public navesGuardadas: any[] = [];

  public tipos: any[] = ['Nave de Lanzadera', 'Nave de Luz', 'Nave no Tripulada', 'Nave Tripulada'];

        private nombre: string = '';
        private potencia: string = '';
        private velocidad: string = '';
        private peso: number = 0;
        private tipo: string = '';
        private cantidad: number = 0;


  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {

    this.miFormulario = this.fb.group({

      nombre: ['Saturno', [ Validators.required ] ],
      potencia: ['13000', [ Validators.required ] ],
      velocidad: ['12Km/s', [ Validators.required ] ],
      peso: [ 1000, [ Validators.required, Validators.min(0) ] ],
      tipo: [ '', [ Validators.required ] ],
      cantidad: [ null, [  ] ],
      
    });

    // if( localStorage.getItem( 'Nave de Lanzadera' )) {
    //   this.navesGuardadas = JSON.parse(localStorage.getItem('Nave de Lanzadera')!);
    //   this.naves = this.navesGuardadas;
    // }
    
    
  }

  guardarLocalStorage( tipo: string, naves: any) {
    localStorage.setItem( tipo , JSON.stringify( naves ) );
  }
  cargarLocalSorage( tipo:string ) {

    this.naves = [];
    if( localStorage.getItem( tipo )) {
      this.naves = JSON.parse(localStorage.getItem( tipo )!);
      //  = this.navesGuardadas;
    }

  }

  guardarNave() {

    
    if( this.miFormulario.invalid ){
      
      this.miFormulario.markAllAsTouched();
      Swal.fire('Error', 'Ha ocurrido un error', 'error');

    } else {

      this.nombre = this.miFormulario.get('nombre')?.value;
      this.potencia = this.miFormulario.get('potencia')?.value;
      this.velocidad = this.miFormulario.get('velocidad')?.value;
      this.peso = this.miFormulario.get('peso')?.value;
      this.tipo = this.miFormulario.get('tipo')?.value;
      this.cantidad = this.miFormulario.get('cantidad')?.value;

      switch ( this.tipo ) {

        case 'Nave de Lanzadera':{

          const naveLanzadera = new NaveLanzadera( this.nombre, this.potencia, this.velocidad, this.peso, this.tipo );
          this.cargarLocalSorage( this.tipo );
          this.naves.push( naveLanzadera );
          this.guardarLocalStorage(this.tipo, this.naves);
          
          break;
        }
        case 'Nave de Luz':{

          const naveDeLuz = new NaveLuz( this.nombre, this.potencia, this.velocidad, this.peso, this.tipo );
          this.cargarLocalSorage( this.tipo );
          this.naves.push( naveDeLuz );
          this.guardarLocalStorage( this.tipo, this.naves );

          break;
        }
        case 'Nave no Tripulada':{

          const naveNoTripulada = new NaveNoTripulada( this.nombre, this.potencia, this.velocidad, this.peso, this.tipo );
          this.cargarLocalSorage( this.tipo );
          this.naves.push( naveNoTripulada );
          this.guardarLocalStorage( this.tipo, this.naves );

          break;
        }
        case 'Nave Tripulada':{

          const naveTripulada = new NaveTripulada( this.nombre, this.potencia, this.velocidad, this.peso, this.tipo, this.cantidad );
          this.cargarLocalSorage( this.tipo );
          this.naves.push( naveTripulada );
          this.guardarLocalStorage( this.tipo, this.naves );

          break;
        }
      
        default:
          console.log('Ha ocurrido un error');
          break;
      }

      this.miFormulario.reset();
      
    }
  }

  validarCampos( campo: any ) {
    return this.miFormulario.controls[campo].invalid && this.miFormulario.controls[campo].touched
  }

}
