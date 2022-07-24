import { NaveEspacial } from "src/app/models/nave-espacial";


export class NaveTripulada extends NaveEspacial {

    // naveSpacialLanzadera = new NaveEspacial()
    private cantidad: number;

    constructor( nombre: string, potencia: string, velocidad: string, peso: number, tipo: string, cantidad: number ) { 

        super( nombre, potencia, velocidad, peso, tipo );
        this.cantidad = cantidad;
    }
    
    override creandoNave(): any {

        const nave = {
    
            nombre : 'Vostok',
            potencia: '15000Km',
            peso: 2900,
            tarea: 'Llevar seres humanos para el mantenimiento',
            cantidad : 100
            
         }
           return  nave;
       }

       irALaLuna() {
        console.log('Transportando humanos a la luna');
    }
    
}