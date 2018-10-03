import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  UsuarioService,
  LoginGuard,
  SubirArchivoService
} from './service.index';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService,
    SubirArchivoService,
    LoginGuard
  ],
  declarations: []
})
export class ServicesModule { }
