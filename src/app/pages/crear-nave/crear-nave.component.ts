import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Tipos de naves
import { NaveNoTripulada } from './tipos/nave-noTripulada';
import { NaveLanzadera } from './tipos/nave-lanzadera';
import { NaveLuz } from './tipos/nave-luz';
import { NaveTripulada } from './tipos/nave-tripulada';


//Alertas
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-nave',
  templateUrl: './crear-nave.component.html',
  styleUrls: ['./crear-nave.component.css']
})
export class CrearNaveComponent implements OnInit {

  miFormulario!: FormGroup;

  public naves: any[] = [];
  public img: string = '';


  public tipos: any[] = ['Nave de Lanzadera', 'Nave de Luz', 'Nave no Tripulada', 'Nave Tripulada'];

        private nombre: string = '';
        private potencia: string = '';
        private velocidad: string = '';
        private peso: number = 0;
        private tipo: string = '';
        private cantidad: number = 0;


  constructor( private fb: FormBuilder,
               private router: Router ) { }

  ngOnInit(): void {

    this.miFormulario = this.fb.group({

      nombre: ['', [ Validators.required ] ],
      potencia: ['', [ Validators.required ] ],
      velocidad: ['', [ Validators.required ] ],
      peso: [ null, [ Validators.required, Validators.min(0) ] ],
      tipo: [ '', [ Validators.required ] ],

      cantidad: [ null ],
      img: [ this.img ],
      
    });
    
    
  }

  guardarLocalStorage( tipo: string, naves: any) {

    localStorage.setItem( tipo , JSON.stringify( naves ) );

  }

  cargarLocalSorage( tipo:string ) {

    this.naves = [];
    if( localStorage.getItem( tipo )) {
      this.naves = JSON.parse(localStorage.getItem( tipo )!);
    }

  }

  guardarNave() {

    if( this.miFormulario.invalid ){
      
      this.miFormulario.markAllAsTouched();
      Swal.fire('Error', 'Ha ocurrido un error', 'error');

    } else {

    Swal.fire({

        title: '¿Estás seguro que deseas guardar?',
        text: `Creando la nave ${this.miFormulario.get('nombre')?.value}`,
        icon: 'warning',
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.nombre = this.miFormulario.get('nombre')?.value;
          this.potencia = this.miFormulario.get('potencia')?.value;
          this.velocidad = this.miFormulario.get('velocidad')?.value;
          this.peso = this.miFormulario.get('peso')?.value;
          this.tipo = this.miFormulario.get('tipo')?.value;
          this.cantidad = this.miFormulario.get('cantidad')?.value;

      this.GuardarImagen();
      switch ( this.tipo ) {

        case 'Nave de Lanzadera':{

          const naveLanzadera = new NaveLanzadera( this.nombre, this.potencia, this.velocidad, this.peso, this.tipo, this.img );
          this.cargarLocalSorage( this.tipo );
          this.naves.push( naveLanzadera );
          this.guardarLocalStorage(this.tipo, this.naves);

          break;
        }
        case 'Nave de Luz':{

          const naveDeLuz = new NaveLuz( this.nombre, this.potencia, this.velocidad, this.peso, this.tipo, this.img );
          this.cargarLocalSorage( this.tipo );
          this.naves.push( naveDeLuz );
          this.guardarLocalStorage( this.tipo, this.naves );

          break;
        }
        case 'Nave no Tripulada':{

          const naveNoTripulada = new NaveNoTripulada( this.nombre, this.potencia, this.velocidad, this.peso, this.tipo, this.img );
          this.cargarLocalSorage( this.tipo );
          this.naves.push( naveNoTripulada );
          this.guardarLocalStorage( this.tipo, this.naves );

          break;
        }
        case 'Nave Tripulada':{

          const naveTripulada = new NaveTripulada( this.nombre, this.potencia, this.velocidad, this.peso, this.tipo, this.cantidad, this.img );
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
      
          Swal.fire(

            'Guardado con exito!',
            'La nave ha sido creada exitosamente.',
            'success'
          )
        }
      })
      

      
      
    }
  }

  validarCampos( campo: any ) {
    return this.miFormulario.controls[campo].invalid && this.miFormulario.controls[campo].touched
  }

  irANaves() {
    this.router.navigate(['estacionSofka']);
  }

  GuardarImagen() {
    
    switch ( this.tipo ) {
      
      case 'Nave de Lanzadera':{
        this.img = 'https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-rocket-achievements-flaticons-flat-flat-icons-2.png';
        break;
      }
      case 'Nave de Luz':{
        this.img = 'https://img.icons8.com/dusk/64/000000/rocket--v1.png'
        break;
      }
      case 'Nave no Tripulada':{

        this.img = 'https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-rocket-project-planing-flatart-icons-lineal-color-flatarticons-1.png'

        break;
      }
      case 'Nave Tripulada':{

        this.img = 'https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-rocket-advertising-kiranshastry-lineal-color-kiranshastry.png'

        break;
      }
    
      default:
        console.log('Ha ocurrido un error');
        break;
    }
  }

}
