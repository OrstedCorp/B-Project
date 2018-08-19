import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.router';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';





@NgModule({

declarations:[
    
   
ProfileComponent
],
exports:[ // Se exportan si van a ser usadas en elementos exteriores.

 

],
imports:[
    SharedModule,
    CommonModule,
    PAGES_ROUTES
  
]


})

export class PagesModule {}