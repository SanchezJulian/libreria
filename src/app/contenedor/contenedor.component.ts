import { Component, OnInit } from '@angular/core';
import { LibroService } from "../libro.service"; 
  


@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit {

  lista: any = [];

  constructor(private libroService: LibroService) { }

  async ngOnInit()  {
    
    this.lista = await this.libroService.listaDeLibros();
  }

  async agregarLibroALista(){

    this.lista = await this.libroService.listaDeLibros();
    
    //this.lista.push(unLibro);

  }

}
