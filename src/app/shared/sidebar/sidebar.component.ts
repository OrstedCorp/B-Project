import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';

declare function init_plugins();

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles:[]
})
export class SidebarComponent implements OnInit {
  usuario:Usuario;
  constructor( public _usuarioService: UsuarioService ) { } // cargarmenu recordarrrrrrrrrrrrrr

  ngOnInit() {
    init_plugins();
    this.usuario= this._usuarioService.usuario;
  }

}
