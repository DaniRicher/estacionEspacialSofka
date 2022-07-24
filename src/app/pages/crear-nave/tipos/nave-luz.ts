import { NaveEspacial } from "src/app/models/nave-espacial";
import Swal from "sweetalert2";


export class NaveLuz extends NaveEspacial {


    constructor( nombre: string, potencia: string, velocidad: string, peso: number, tipo: string ) { 

        super( nombre, potencia, velocidad, peso, tipo );
        
    }

   override creandoNave(): any {

    const nave = {

        nombre : 'SpaceLight',
        potencia: '100000Km',
        velocidad: 'N/A',
        peso: 2900,
        tipo: 'Nave de Luz',
        img: 'https://img.icons8.com/dusk/64/000000/rocket--v1.png'

     }
       return  nave;
   }

    viajarAOtraGalaxia() {
        Swal.fire(
            `Objetivo`,
            'Estoy viajando a otra galaxia a la velocidad de la luz',
            'success'
          )
   }
}