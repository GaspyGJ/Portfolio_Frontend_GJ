
export class SoftSkill{

    idSoftSkill:number;

    numero_orden:number;

    porcentaje:number;
    
    titulo:string;

    fontSize:string;

    constructor(porcentaje:number,fontSize:string,titulo:string,numero_orden:number){
            this.porcentaje=porcentaje;
            this.titulo=titulo;
            this.fontSize=fontSize;
            this.numero_orden=numero_orden;
    }

}