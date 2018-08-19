import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';





const pagesRouter: Routes =[
    { path: 'perfil' , component: ProfileComponent,data:{titulo:'Perfil de usuario'}}
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRouter);