import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  constructor( private _chatService: ChatService ) { }

  ingresar( proveedor: string ) {
    this._chatService.login(proveedor);
  }

  salir() {
    this._chatService.logout();
  }

}
