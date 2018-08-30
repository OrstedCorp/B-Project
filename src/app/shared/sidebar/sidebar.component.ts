import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../services/service.index';

declare function init_plugins();

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles:[]
})
export class SidebarComponent implements OnInit {

  constructor( public _usuarioService: UsuarioService ) { }

  ngOnInit() {
    init_plugins();
  }

}
