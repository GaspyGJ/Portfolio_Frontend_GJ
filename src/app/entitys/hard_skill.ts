
export class HardSkill{

    idHardSkill:number;

    titulo:string;

    numero_orden:number

    porcentaje:number;
    
    urlFoto: string;

    alto:number;

    ancho:number;

    constructor(porcentaje:number,titulo:string,alto:number,ancho:number,urlFoto:string,numero_orden:number){
            this.porcentaje=porcentaje;
            this.alto=alto;
            this.ancho=ancho;
            this.titulo=titulo;

            if(urlFoto != null){
                this.urlFoto=urlFoto;
            }
               
            this.numero_orden=numero_orden;
        }

}