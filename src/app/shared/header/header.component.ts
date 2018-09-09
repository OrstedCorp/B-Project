import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../services/service.index';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';

declare function init_plugins();

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  usuario:Usuario;
  constructor( public _usuarioService: UsuarioService , public router:Router) { }

  ngOnInit() {
    init_plugins();
    this.usuario=this._usuarioService.usuario;
  }

  buscar( termino:string){

    this.router.navigate(['busqueda/',termino]);

}

}
