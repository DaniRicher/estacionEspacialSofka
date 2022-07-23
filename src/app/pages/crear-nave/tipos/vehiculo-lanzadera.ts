import { NaveEspacial } from "src/app/models/nave-espacial";


export class NaveLanzadera extends NaveEspacial {


    constructor( nombre: string, potencia: string, velocidad: string, peso: number ) { 

        super( nombre, potencia, velocidad, peso );
        
    }

   override creandoNave(): any {

    const nave = {

        nombre : 'Saturno V',
        potencia: '32000Km',
        velocidad: 'N/A',
        peso: 2900,
        tarea: 'Llevar suministros'
     }
       return  nave;
   }
    
    
}


