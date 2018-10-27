import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {
  private CARPETA_IMAGENES = 'img';

  constructor(private db: AngularFirestore) {}

  cargarImagenesFireBase(imagenes: FileItem[]) {
    const storageRef = firebase.storage().ref();
    for (const imagen of imagenes) {
      imagen.estaSubiendo = true;

      if (imagen.progreso >= 100) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask = storageRef
        .child(`${this.CARPETA_IMAGENES}/${imagen.nombreArchivo}`)
        .put(imagen.archivo);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) =>
          (imagen.progreso =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100),
        error => console.error('Error al subir el archivo', error),
        () => {
          console.log('Imagen subida de forma correcta');
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);
            imagen.url = downloadURL;
            imagen.estaSubiendo = false;
            this.guardarImagen({ nombre: imagen.nombreArchivo, url: imagen.url });
          });
        }
      );
    }
  }

  guardarImagen(imagen: { nombre: string; url: string }) {
    this.db.collection(`${this.CARPETA_IMAGENES}`).add(imagen);
  }
}
