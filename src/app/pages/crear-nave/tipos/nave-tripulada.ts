import { NaveEspacial } from "src/app/models/nave-espacial";
import Swal from "sweetalert2";


export class NaveTripulada extends NaveEspacial {

    // naveSpacialLanzadera = new NaveEspacial()
    private cantidad: number;

    constructor( nombre: string, potencia: string, velocidad: string, peso: number, tipo: string, cantidad: number, img: string ) { 

        super( nombre, potencia, velocidad, peso, tipo, img );
        this.cantidad = cantidad;
    }
    
    override creandoNave( nombre: string, potencia:string, velocidad:string, peso:number, tipo:string , img:string  ): any {

        const nave = {
    
            nombre : nombre,
            potencia: potencia,
            peso: velocidad,
            velocidad: peso,
            cantidad : 100,
            tipo: tipo,
            img: 'https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-rocket-advertising-kiranshastry-lineal-color-kiranshastry.png'

            
         }
           return  nave;
       }

       irALaLuna() {
        Swal.fire(
            `Objetivo`,
            'Transportar humanos a la luna',
            'info'
          )
    }
    
}