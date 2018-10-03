import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.router';
import { SharedModule } from '../shared/shared.module';
// Pipes
import { PipesModule } from '../pipes/pipes.module';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({

    declarations:[
        HomeComponent,
        ProfileComponent
    ],
    exports:[ // Se exportan si van a ser usadas en elementos exteriores.

    ],
    imports:[
        SharedModule,
        CommonModule,
        PAGES_ROUTES,
        FormsModule,
        ReactiveFormsModule,
        PipesModule
    ]
})

export class PagesModule {}