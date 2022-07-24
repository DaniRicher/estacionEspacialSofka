import { NaveEspacial } from "src/app/models/nave-espacial";


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
            tarea: 'Abasteciendo y limpiando la Estación Espacial Internacional'
            
         }
           return  nave;
       }
    
    mandarInformacion() {
        console.log('Estoy enviando información a la tierra');
    }
    
}