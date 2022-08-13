
export class SoftSkill{

    idSoftSkill:number;

    porcentaje:number;
    
    titulo:string;

    fontSize:string;

    constructor(porcentaje:number,fontSize:string,titulo:string){
            this.porcentaje=porcentaje;
            this.titulo=titulo;
            this.fontSize=fontSize;
    }

}