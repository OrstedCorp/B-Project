import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { LoginGuard } from './services/guards/login.guard';

const appRoutes: Routes = [ // Se crea el objeto de tipo Routes,

   
    { path: 'login' , component: LoginComponent},
    { path:'',component:PagesComponent,loadChildren:'./pages/pages.module#PagesModule'}, // Falta implementar el guard ....
    { path: '**' , component: NopagefoundComponent}// Los ** es un comodin para cualquier ruta invalida.
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash:true}); // Se modulan las rutas para ser importadas en el module principal.