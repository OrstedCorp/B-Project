import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../../models/usuario.model';
import { URL_SERVICIOS } from '../../config/config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import swal from 'sweetalert2';

@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(public http: HttpClient, public router: Router, public _subirArchivoService: SubirArchivoService) {
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

  //Actualizar un Usuario
  actualizarUsuario(usuario: Usuario){

    let url = URL_SERVICIOS + '/usuario/' + usuario._id;
    url+= '?token=' + this.token;

    return this.http.put(url, usuario)
              .map((resp:any) => {
                this.guardarStorage(resp.usuario._id, this.token, resp.usuario);
                swal('Usuario actualizado', usuario.nombre, 'success');
                return true;
              })
              .catch(err => {
                swal('Error al guardar usuario ', err.error.mensaje, 'error');
                return Observable.throw(err);
              });

  }

  //Cambiar la imagen de un usuario
  cambiarImagen( archivo:File, id:string ){

    this._subirArchivoService.subirArchivo( archivo, 'usuarios', id )
          .then( (resp:any) =>{

            this.usuario.img = resp.usuario.img;
            swal('Imagen actualizada', this.usuario.nombre, 'success');
            
            this.guardarStorage(id, this.token, this.usuario);

          })
          .catch( (resp:any) =>{
            console.log(resp);
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
