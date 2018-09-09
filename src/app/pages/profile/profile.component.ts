import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
//declare function init_plugins();
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  usuario:Usuario;
  constructor(public _usuarioService: UsuarioService) {
    this.usuario= this._usuarioService.usuario;
   }

  ngOnInit() {
    
  }

}
