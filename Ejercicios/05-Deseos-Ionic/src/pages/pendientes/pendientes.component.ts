import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

import { NavController, AlertController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';
import { Lista } from '../../app/clases';


@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {


  constructor( private _listaDeseos: ListaDeseosService,
               private navCtrl: NavController,
               private alertCtrl: AlertController) {

  }

  ngOnInit() { }

  irAgregar() {
    const alert = this.alertCtrl.create({
      title: 'Nueva lista',
      message: 'Nombre de la nueva lista que desea',
      inputs: [{
        name: 'titulo',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Agregar',
          handler: (data : any) => {
            if(data.titulo.length === 0) {
              return
            }
            this.navCtrl.push(AgregarComponent, {titulo : data.titulo});
          }
        }
      ]
    });

    alert.present();
  }

}
