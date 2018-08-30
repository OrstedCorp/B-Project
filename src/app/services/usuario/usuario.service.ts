import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import swal from 'sweetalert2';

@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(public http: HttpClient, public router: Router) {
    this.cargarStorage();
   }

  //DEBEN ESTAR AUTENTICADOS
  estaLogueado(){
    return (this.token.length > 5) ? true : false;
  }

  //LOCAL STORAGE
  //Guardar en el STORAGE
  guardarStorage( id:string, token:string, usuario:Usuario){
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
  }
  //Cargar del STORAGE
  cargarStorage(){

    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }

  }

  // LOGIN del usuario
  login( usuario: Usuario ){

    let url = URL_SERVICIOS + '/login';
    return this.http.post( url, usuario )
          .map( (resp:any) => {
            this.guardarStorage(resp.id, resp.token, resp.usuario);
            return true;
          })
          .catch(err => {
            swal('Error en el login', err.error.mensaje, 'error');
            return Observable.throw(err);
          });

  }

  //CERRAR SESION
  logout(){

    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);

  }

}
