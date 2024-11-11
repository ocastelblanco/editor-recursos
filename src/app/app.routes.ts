import { Routes } from '@angular/router';
import { InicioComponent } from '@vistas/inicio/inicio.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' }
];
