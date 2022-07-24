import { NaveEspacial } from "src/app/models/nave-espacial";
import Swal from "sweetalert2";


export class NaveLanzadera extends NaveEspacial {


    constructor( nombre: string, potencia: string, velocidad: string, peso: number, tipo: string ) { 

        super( nombre, potencia, velocidad, peso, tipo );
        
    }

   override creandoNave(): any {

    const nave = {

        nombre : 'Saturno V',
        potencia: '32000Km',
        velocidad: 'N/A',
        peso: 2900,
        tipo: 'Nave de Lanzadera',
        img: 'https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-rocket-achievements-flaticons-flat-flat-icons-2.png'
     }
       return nave;
   }

   transportarSatelite() {
    Swal.fire(
        `Objetivo`,
        'LLevando satelite arficial al espacio',
        'success'
      )
   }
   

    
    
}


