export interface _Nave {

    nombre: string,
    potencia: string,
    valocidad: string,
    peso: number,

}

export class NaveEspacial {
    

    constructor(

        private nombre: string,
        private potencia: string,
        private valocidad: string,
        private peso: number,

    ) { }

    get getNombre( ){
        return this.nombre;
    }

    

}