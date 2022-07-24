
export class NaveEspacial {
    

    constructor(

        private nombre: string,
        private potencia: string,
        private velocidad: string,
        private peso: number,
        private tipo: string,
        private img?: string,

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

    public creandoNave( nombre: string, potencia:string, velocidad:string, peso:number, tipo:string , img:string ) {

        return {

            nombre: nombre, 
            potencia: potencia, 
            velocidad: velocidad, 
            peso: peso,
            tipo: tipo,
            img: img

        }
        
    }

    

}