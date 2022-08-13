
export class Persona{

    id: number; //autogenerated
    
    nombre : String;
    
    apellido: String;
    
    edad: number;
    
    domicilio: String;
    
    nombrePuesto: String;
    
    urlFoto: String;

    descripcion:String;
    
    constructor(nombre:String ,apellido:String ,edad:number ,
        domicilio:String ,nombrePuesto:String,urlFoto:String,descripcion:String){
    
            this.nombre=nombre
            this.apellido=apellido;
            this.edad=edad;
            this.domicilio=domicilio;
            this.nombrePuesto=nombrePuesto;
            this.urlFoto=urlFoto;
            this.descripcion=descripcion;
    }

}