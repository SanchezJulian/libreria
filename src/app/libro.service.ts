import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  url = "https://still-reef-30402.herokuapp.com/";

  constructor(private http: HttpClient) { }

   async guardarLibro(unLibro){
     try{
      let resultado: any;

      resultado = await this.http.post(this.url+"libro",unLibro).toPromise();

      return resultado;

     }
     catch(error){
      console.log(error)
     }
    
  }

  async listaDeLibros(){
    try{
      var resultado: any;

      resultado = await this.http.get(this.url+"libro").toPromise();

      return resultado;
    }
    catch(error){
      console.log(error);
    }
  }
}
