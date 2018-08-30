import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Importar los servicios
import { UsuarioService } from '../services/service.index';

// Importar modelos a usar
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router, public _usuarioService: UsuarioService ) { }

  ngOnInit() {
    init_plugins();
  }

  ingresar( forma: NgForm ){

    if( forma.invalid ){
      return;
    }

    let usuario = new Usuario(null, forma.value.email, forma.value.password);
    this._usuarioService.login( usuario )
          .subscribe( () => this.router.navigate(['/home']) );

  }

}
