import { NaveEspacial } from "src/app/models/nave-espacial";


export class NaveNoTripulada extends NaveEspacial {

    // naveSpacialLanzadera = new NaveEspacial()

    constructor( nombre: string, potencia: string, velocidad: string, peso: number) { 

        super( nombre, potencia, velocidad, peso );
    }

    override creandoNave(): any {

        const nave = {
    
            nombre : 'Saturno V',
            potencia: '32000Km',
            velocidad: '12000Km/h',
            peso: 2900,
            tarea: 'Limpiar la Estación Espacial Internacional'
            
         }
           return  nave;
       }
    
}