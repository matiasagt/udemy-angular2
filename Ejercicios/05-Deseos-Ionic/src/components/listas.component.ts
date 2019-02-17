import { Component, OnInit, Input } from '@angular/core';
import { ListaDeseosService } from '../app/services/lista-deseos.service';
import { Lista } from '../app/clases';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { DetalleComponent } from '../pages/detalle/detalle.component';


@Component({
  selector: 'app-listas',
  templateUrl: 'listas.component.html',
})
export class ListasComponent implements OnInit {

  @Input() terminada: boolean = false;


  constructor(public _listaDeseos: ListaDeseosService,
          public navCtrl: NavController,
          public alertCtrl: AlertController) {

  }

  ngOnInit() { }

  borrarLista( lista: Lista ){
    this._listaDeseos.borrarLista(lista);
  }

  editarLista( lista: Lista, sliding: ItemSliding ){
    sliding.close();
    const alert = this.alertCtrl.create({
      title: 'Editar nombre',
      message: 'Editar el nombre de la lista',
      inputs: [{
        name: 'titulo',
        placeholder: 'Nombre de la lista',
        value: lista.nombre
      }],
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Guardar',
          handler: (data : any) => {
            if(data.titulo.length === 0) {
              return
            }
            lista.nombre = data.titulo;
            this._listaDeseos.actualizarData();
          }
        }
      ]
    });

    alert.present();
  }

  verDetalle( lista, idx ){ 
    this.navCtrl.push(DetalleComponent, { lista, idx });
  }
 
}
