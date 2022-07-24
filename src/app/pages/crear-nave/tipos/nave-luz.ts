import { NaveEspacial } from "src/app/models/nave-espacial";
import Swal from "sweetalert2";


export class NaveLuz extends NaveEspacial {


    constructor( nombre: string, potencia: string, velocidad: string, peso: number, tipo: string, img: string ) { 

        super( nombre, potencia, velocidad, peso, tipo, img );
        
    }

   override creandoNave( nombre: string, potencia:string, velocidad:string, peso:number, tipo:string , img:string  ): any {

    const nave = {

        nombre : nombre,
        potencia: potencia,
        velocidad: velocidad,
        peso: peso,
        tipo: tipo,
        img: 'https://img.icons8.com/dusk/64/000000/rocket--v1.png'

     }
       return  nave;
   }

    viajarAOtraGalaxia() {
        Swal.fire(
            `Objetivo`,
            'Viajar a otra galaxia a la velocidad de la luz',
            'info'
          )
   }
}