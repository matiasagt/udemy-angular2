import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VirtualComponent } from './components/virtual/virtual.component';

// Modulo para poder usar virtual scroll
import { ScrollingModule } from '@angular/cdk/scrolling';
// Modulo para poder usar drag and drop
import { DragDropModule } from '@angular/cdk/drag-drop';


import { DragComponent } from './components/drag/drag.component';
import { PaisesComponent } from './components/paises/paises.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
