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
        static isLoadDB(){
                if(this.cantidad_elementos_a_cargar == isLoadDB.elementos_Cargados){
                        return true;
                }
                return false;
        }
    
}
 