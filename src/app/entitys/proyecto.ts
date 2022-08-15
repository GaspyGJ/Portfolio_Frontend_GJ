
export class Proyecto{

    idProyecto:number;

    descripcion:string;
    
    titulo:string;

    urlGitHub:string;

    urlAppWeb:string;

    urlFotos:string[];

    constructor(titulo:string,descripcion:string,urlGitHub:string,urlAppWeb:string,urlFotos:string[]){
            this.titulo=titulo;
            this.descripcion=descripcion;
            this.urlGitHub=urlGitHub;
            this.urlAppWeb=urlAppWeb;
            this.urlFotos=urlFotos;
    }
}