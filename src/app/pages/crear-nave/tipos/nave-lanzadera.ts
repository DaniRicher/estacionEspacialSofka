import { NaveEspacial } from "src/app/models/nave-espacial";


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
        tarea: 'Llevar suministros'
     }

       return  nave;
   }

   transportarSatelite() {
    console.log('LLevando satelite arficial al espacio');
   }
   

    
    
}


