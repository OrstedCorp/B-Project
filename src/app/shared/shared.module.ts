import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports:[
        RouterModule,
        CommonModule,
        PipesModule,
  ],
  declarations:[
  
   
      NopagefoundComponent,
      HeaderComponent,
      SidebarComponent
  ],
  exports:[
      HeaderComponent,
      SidebarComponent,  
      NopagefoundComponent
  
  ]
  
  
  })
export class SharedModule { }
