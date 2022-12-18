
export class HardSkill{

    idHardSkill:number;

    numero_orden:number

    porcentaje:number;
    
    urlFoto: string;

    alto:number;

    ancho:number;

    constructor(porcentaje:number,alto:number,ancho:number,urlFoto:string,numero_orden:number){
            this.porcentaje=porcentaje;
            this.alto=alto;
            this.ancho=ancho;

            if(urlFoto != null){
                this.urlFoto=urlFoto;
            }
               
            this.numero_orden=numero_orden;
        }

}