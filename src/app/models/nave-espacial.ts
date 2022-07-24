
export class NaveEspacial {
    

    constructor(

        private nombre: string,
        private potencia: string,
        private velocidad: string,
        private peso: number,
        private tipo: string

    ) { }


    explorar() {
        console.log( 'Estoy explorando' );
    }

    despegar() {
        console.log( 'Estoy despegando' );
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

    get getTipo() {
        return this.tipo;
    }

    public creandoNave() {

        return {

            nombre: this.nombre, 
            potencia: this.potencia, 
            velocidad: this.velocidad, 
            peso: this.peso,

        }
        
    }

    

}