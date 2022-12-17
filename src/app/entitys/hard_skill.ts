
export class HardSkill{

    idHardSkill:number;

    porcentaje:number;
    
    urlFoto: string;

    alto:number;

    ancho:number;

    constructor(porcentaje:number,alto:number,ancho:number,urlFoto:string){
            this.porcentaje=porcentaje;
            this.alto=alto;
            this.ancho=ancho;

            if(urlFoto != null){
                this.urlFoto=urlFoto;
            }
    }

}