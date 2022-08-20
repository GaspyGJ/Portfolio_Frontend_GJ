import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PathServie {
  static PATH_backend = "https://gjbackend.herokuapp.com";
  //static PATH_backend ="http://localhost:8080";
  constructor() { }
}
