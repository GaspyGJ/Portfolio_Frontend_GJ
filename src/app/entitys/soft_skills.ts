
export class SoftSkill{

    idSoftSkill:number;

    numero_orden:number;

    porcentaje:number;

    urlFoto: string;
    
    titulo:string;

    alto:number;

    ancho:number;

    constructor(porcentaje:number,titulo:string,numero_orden:number,urlFoto: string,alto:number,ancho:number){
        
            this.porcentaje=porcentaje;

            this.titulo=titulo;

            this.alto=alto;

            this.ancho=ancho;

            this.numero_orden=numero_orden;
            
            if(urlFoto != null){
                this.urlFoto=urlFoto;
            }
            
    }

}