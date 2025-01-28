import { Routes } from '@angular/router';
import { ConsultarComponent } from './consultar/consultar.component';
import { InsertarComponent } from './insertar/insertar.component';
import { ConsultarpracticaComponent } from './consultarpractica/consultarpractica.component';

export const routes: Routes = [
    {path: 'consultar',component: ConsultarComponent},
    {path:'insertar',component:InsertarComponent},
    {path:'consultarpractica',component:ConsultarpracticaComponent}
    
];
