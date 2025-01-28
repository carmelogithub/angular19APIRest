import { Routes } from '@angular/router';
import { ConsultarComponent } from './consultar/consultar.component';
import { InsertarComponent } from './insertar/insertar.component';

export const routes: Routes = [
    {path: 'consultar',component: ConsultarComponent},
    {path:'insertar',component:InsertarComponent},
    
];
