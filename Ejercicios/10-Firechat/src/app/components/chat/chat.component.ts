import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';
import { Chat } from '../../interfaces/chat.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {

  mensaje: string = "";
  elemento: any;

  constructor(public _chatService: ChatService) {

  }

  ngOnInit(){
    this.elemento = document.getElementById("app-mensajes");
    this._chatService.cargarMensajes().subscribe( () => {
      setTimeout( () => { this.elemento.scrollTop = this.elemento.scrollHeight }, 20);
    });
  }

  enviarMensaje() {
    if( this.mensaje.length == 0 ){
      return
    }

    this._chatService.agregarMensaje( this.mensaje )
          .then( () => this.mensaje = '' )
          .catch( (err) => console.error('Error al enviar', err ) );
  }

}
