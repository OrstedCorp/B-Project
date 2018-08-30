import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  UsuarioService,
  LoginGuard
} from './service.index';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService,
    LoginGuard
  ],
  declarations: []
})
export class ServicesModule { }
