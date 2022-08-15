
export class Educacion{

    idEducacion:number;

    titulo:string;

    descripcion:string;

    anioStart:string;
    
    anioEnd:string;

    estadoActual:string;

    constructor(titulo:string,descripcion:string,anioStart:string,anioEnd:string,estadoActual:string){
            this.titulo=titulo;
            this.descripcion=descripcion;
            this.anioStart=anioStart;
            this.anioEnd=anioEnd;
            this.estadoActual=estadoActual;
    }

}