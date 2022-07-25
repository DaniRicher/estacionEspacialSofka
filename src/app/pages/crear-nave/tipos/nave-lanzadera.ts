import { NaveEspacial } from "src/app/models/nave-espacial";
import Swal from "sweetalert2";


export class NaveLanzadera extends NaveEspacial {


    constructor( nombre: string, potencia: string, velocidad: string, peso: number, tipo: string, img: string ) { 

        super( nombre, potencia, velocidad, peso, tipo, img );
        
    }

   override creandoNave( nombre: string, potencia:string, velocidad:string, peso:number, tipo:string , img:string ): any {

    const nave = {

        nombre : nombre,
        potencia: potencia,
        velocidad: velocidad,
        peso: peso,
        tipo: tipo,
        img: 'https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-rocket-achievements-flaticons-flat-flat-icons-2.png'
     }
       return nave;
   }

   transportarSatelite() {

    Swal.fire(
        `Objetivo`,
        'LLevar satelites arficiales al espacio',
        'info'
      );

   }
   

    
    
}


