
export class Proyecto{

    idProyecto:number;

    numero_orden:number

    descripcion:string;
    
    titulo:string;

    urlGitHub:string;

    urlAppWeb:string;

    urlFotos:string[];

    constructor_sin_imagen(titulo:string,descripcion:string,urlGitHub:string,urlAppWeb:string){
            this.titulo=titulo;
            this.descripcion=descripcion;
            this.urlGitHub=urlGitHub;
            this.urlAppWeb=urlAppWeb;
    }

    constructor(titulo:string,descripcion:string,urlGitHub:string,urlAppWeb:string,urlFotos:string[],numero_orden:number){
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.urlGitHub=urlGitHub;
        this.urlAppWeb=urlAppWeb;
        if(urlFotos != null){
            this.urlFotos=urlFotos;
        }
        this.numero_orden=numero_orden;
    }

}