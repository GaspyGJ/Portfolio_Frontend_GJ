import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class isLoadDB {
        //persona+soft+hard+educacion+experiencia+proyectos
        static cantidad_elementos_a_cargar:6;

        private static elementos_Cargados: number;

        static elementoCargado(elemento:string){
            isLoadDB.elementos_Cargados+=1;
            console.log("Cargo el elemento : " + elemento );
        }
        static isLoadDB():boolean{
                if(this.cantidad_elementos_a_cargar == isLoadDB.elementos_Cargados){
                        console.log("Cargaron todos los elementos");
                        return true;
                }
                return false;
        }
    
}
 