import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PathServie {
  static PATH_backend = "https://Portfolio-Backend-GJ.up.railway.app";//este se utiliza actualmente
  
  //static PATH_backend = "https://residential-melisenda-gashpyjullier.koyeb.app"; // este de koyeb anda bien

  //static PATH_backend = "https://gjbackend.herokuapp.com"; --> Dejo de ser gratuito

  //static PATH_backend ="http://localhost:8080";

  constructor() { }
}

