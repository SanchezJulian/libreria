import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() hayUnNuevoLibro = new EventEmitter();

  

  nombre = "";
  descripcion="";
  genero="";
  ibcn="";
  autor="";

  constructor(private libroService: LibroService) { }

  ngOnInit(): void {
  }

  async agregarLibro(){
    var libro = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      genero: this.genero,
      ibcn: this.ibcn,
      autor: this.autor
    }

    var respuesta: any;

    respuesta = await this.libroService.guardarLibro(libro);

    this.hayUnNuevoLibro.emit();
  }
}
