import { NaveEspacial } from "src/app/models/nave-espacial";
import Swal from "sweetalert2";


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
            velocidad: 'N/A',
            cantidad : 100,
            tipo: 'Nave Tripulada',
            img: 'https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-rocket-advertising-kiranshastry-lineal-color-kiranshastry.png'

            
         }
           return  nave;
       }

       irALaLuna() {
        Swal.fire(
            `Objetivo`,
            'Transportando humanos a la luna',
            'success'
          )
    }
    
}