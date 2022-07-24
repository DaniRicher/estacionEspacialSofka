import { NaveEspacial } from "src/app/models/nave-espacial";
import Swal from "sweetalert2";


export class NaveNoTripulada extends NaveEspacial {

    // naveSpacialLanzadera = new NaveEspacial()

    constructor( nombre: string, potencia: string, velocidad: string, peso: number, tipo: string) { 

        super( nombre, potencia, velocidad, peso, tipo );
    }

    override creandoNave(): any {

        const nave = {
    
            nombre : 'Explorer',
            potencia: '10000Km',
            velocidad: '12000Km/h',
            peso: 1900,
            tipo: 'Nave no tripulada',
            img: 'https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-rocket-project-planing-flatart-icons-lineal-color-flatarticons-1.png'

            
         }
           return  nave;
       }
    
    mandarInformacion() {
        Swal.fire(
            `Objetivo`,
            'Estoy enviando información a la tierra',
            'success'
          )
    }
    
}