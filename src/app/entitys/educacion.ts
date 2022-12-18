
export class Educacion{

    idEducacion:number;

    numero_orden:number

    titulo:string;

    descripcion:string;

    anioStart:string;
    
    anioEnd:string;

    estadoActual:string;

    constructor(titulo:string,descripcion:string,anioStart:string,anioEnd:string,estadoActual:string,numero_orden:number){
            this.titulo=titulo;
            this.descripcion=descripcion;
            this.anioStart=anioStart;
            this.anioEnd=anioEnd;
            this.estadoActual=estadoActual;
            this.numero_orden = numero_orden;
    }

}