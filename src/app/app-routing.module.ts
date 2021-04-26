import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaInscritosComponent } from './components/lista-inscritos/lista-inscritos.component';
import { DetallesInscritoComponent } from './components/detalles-inscrito/detalles-inscrito.component';
import { CreateInscritoComponent } from './components/create-inscrito/create-inscrito.component';
import { ListaSupervisoresComponent } from './components/lista-supervisores/lista-supervisores.component';
import { CreateSupervisorComponent } from './components/create-supervisor/create-supervisor.component';
import { ListaExamenesComponent } from './components/lista-examenes/lista-examenes.component';
import { CreateExamenComponent } from './components/create-examen/create-examen.component';

const routes: Routes = [
  { path: '', redirectTo: 'inscritos', pathMatch: 'full' },
  { path: 'inscritos', component: ListaInscritosComponent },
  { path: 'inscritos/:id', component: DetallesInscritoComponent },
  { path: 'create', component: CreateInscritoComponent },
  { path: 'supervisores', component: ListaSupervisoresComponent},
  { path: 'createSupervisor', component:CreateSupervisorComponent},
  { path: 'examenes', component: ListaExamenesComponent},
  { path: 'createExamen', component: CreateExamenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
