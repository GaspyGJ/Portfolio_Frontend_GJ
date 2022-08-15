
export class Experiencia{

    idExperiencia:number;

    titulo:string;

    descripcion:string;

    anioStart:string;
    
    anioEnd:string;

    tipoExperiencia:string;

    tegnologiasUtilizadas:string;

    linkProyectos:string;

    constructor(titulo:string,descripcion:string,anioStart:string,anioEnd:string,
        tipoExperiencia:string,tegnologiasUtilizadas:string,linkProyectos:string){
            this.titulo=titulo;
            this.descripcion=descripcion;
            this.anioStart=anioStart;
            this.anioEnd=anioEnd;
            this.tipoExperiencia=tipoExperiencia;
            this.tegnologiasUtilizadas=tegnologiasUtilizadas
            this.linkProyectos=linkProyectos;
    }

}