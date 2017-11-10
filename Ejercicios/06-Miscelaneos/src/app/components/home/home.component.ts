import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      <h2>ngStyle y su uso con directivas de atributos.</h2>
      <app-ng-style></app-ng-style>
      <hr>
      <br>

      <h2>Aplicando CSS a un solo componente</h2>
      <app-css></app-css>
      <p>Hola mundo desde app.component</p>
      <hr>
      <br>

      <h2>Usando procesos asíncronos con indicadores de usuario</h2>
      <app-clases></app-clases>
      <hr>
      <br>

      <h2>Directivas personalizadas</h2>
      <p [appResaltado]="'orange'">Hola Mundo</p>
      <hr>
      <br>

      <h2>ngSwitch - Múltiples opciones con una sola decisión</h2>
      <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }







}
