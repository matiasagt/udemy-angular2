import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Chat } from '../interfaces/chat.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Chat>;
  public chats: Chat[] = [];
  public usuario: any = {};

  constructor(private afs: AngularFirestore,
              private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe( user => {
      console.log('Estado del usuario: ', user);

      if(!user){
        return;
      }

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    })
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Chat>('chats', ref => ref.orderBy('fecha', 'desc').limit(5));
    return this.itemsCollection.valueChanges().map((chats: Chat[]) => {
      this.chats = chats.reverse();
    })
  }

  agregarMensaje(texto: string) {
    let chat: Chat = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    }
    return this.itemsCollection.add(chat);
  }

  login(proveedor: string) {
    if (proveedor == 'google') {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } else {
      this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }
  }

  logout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
  }

}
