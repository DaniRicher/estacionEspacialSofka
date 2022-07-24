import { NaveEspacial } from "src/app/models/nave-espacial";


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
        tarea: 'Viajar entre galaxias',
        tipo: 'Nave de Luz'

     }
       return  nave;
   }

    viajarAOtraGalaxia() {
        console.log('Estoy viajando a otra galaxia a la velocidad de la luz');
   }
}