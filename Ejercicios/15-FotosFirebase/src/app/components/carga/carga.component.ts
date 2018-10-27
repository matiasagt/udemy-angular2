import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaImagenesService } from '../../services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {
  estaSobreElemento: boolean = false;
  archivos: FileItem[] = [];

  constructor(public _cargaImagenes: CargaImagenesService) {}

  ngOnInit() {}

  cargarImagenes() {
    this._cargaImagenes.cargarImagenesFireBase(this.archivos);
  }

  limpiarImagenes(){
    this.archivos = [];
  }
}
