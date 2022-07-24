import { NaveEspacial } from "src/app/models/nave-espacial";
import Swal from "sweetalert2";


export class NaveNoTripulada extends NaveEspacial {

    // naveSpacialLanzadera = new NaveEspacial()

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
            img: 'https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-rocket-project-planing-flatart-icons-lineal-color-flatarticons-1.png'

            
         }
           return  nave;
       }
    
    mandarInformacion() {
        Swal.fire(
            `Objetivo`,
            'Enviar información a la tierra',
            'info'
          )
    }
    
}