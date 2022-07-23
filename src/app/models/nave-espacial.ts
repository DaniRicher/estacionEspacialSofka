
export class NaveEspacial {
    

    constructor(

        private nombre: string,
        private potencia: string,
        private velocidad: string,
        private peso: number,

    ) { }


    explorar() {
        console.log( 'Estoy explorando' );
    }

    transportar() {
        console.log( 'Estoy transportando' );
    }

    get getNombre() {
        return this.nombre;
    }

    get getPotencia() {
        return this.potencia;
    }

    get getVelocidad() {
        return this.velocidad;
    }

    get getPeso() {
        return this.peso;
    }

    creandoNave( ) {

        return {

            nombre: this.nombre, 
            potencia: this.potencia, 
            velocidad: this.velocidad, 
            peso: this.peso,

        }
        
    }

    

}