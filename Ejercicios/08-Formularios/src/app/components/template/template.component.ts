import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class TemplateComponent {

  usuario:Object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  }

  paises:Object[] = [
    {codigo: "CRI", nombre: "Costa Rica"},
    {codigo: "ESP", nombre: "España"}
  ]

  sexos:string[] = ["Hombre","Mujer"]


  constructor() { }

  guardar( formulario:NgForm ){
    console.log("ngForm ", formulario);
    console.log("Valor ", formulario.value);

    console.log("Usuario ", this.usuario);
  }

}
