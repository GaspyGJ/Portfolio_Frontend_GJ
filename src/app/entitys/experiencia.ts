
export class Experiencia{

    idExperiencia:number;

    numero_orden:number

    titulo:string;

    descripcion:string;

    anioStart:string;
    
    anioEnd:string;

    tipoExperiencia:string;

    tegnologiasUtilizadas:string;

    linkProyectos:string;

    constructor(titulo:string,descripcion:string,anioStart:string,anioEnd:string,
        tipoExperiencia:string,tegnologiasUtilizadas:string,linkProyectos:string,numero_orden:number){
            this.titulo=titulo;
            this.descripcion=descripcion;
            this.anioStart=anioStart;
            this.anioEnd=anioEnd;
            this.tipoExperiencia=tipoExperiencia;
            this.tegnologiasUtilizadas=tegnologiasUtilizadas
            this.linkProyectos=linkProyectos;
            this.numero_orden = numero_orden;
    }

}