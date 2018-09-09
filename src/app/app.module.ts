import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// Rutas
import { APP_ROUTES } from './app.routes';

import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';

// Para que los formularios con directivas de angular funcionen
// Realizado por: Jose David Acevedo
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Servicios
import { ServicesModule } from './services/services.module';
import { ImagenPipe } from './pipes/imagen.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    
  ],
  imports: [
    SharedModule,
    APP_ROUTES,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
