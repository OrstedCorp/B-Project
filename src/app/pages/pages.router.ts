import { Routes, RouterModule } from '@angular/router';

//Rutas hijas
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


const pagesRouter: Routes = [
    { path: 'home', component: HomeComponent, data: {titulo: 'Inicio'} },
    { path: 'profile', component: ProfileComponent, data:{titulo:'Perfil de usuario'} },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRouter);