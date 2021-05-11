import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaInscritosComponent } from './components/lista-inscritos/lista-inscritos.component';
import { DetallesInscritoComponent } from './components/detalles-inscrito/detalles-inscrito.component';
import { CreateInscritoComponent } from './components/create-inscrito/create-inscrito.component';
import { ListaEvaluadoresComponent } from './components/lista-evaluadores/lista-evaluadores.component';
import { CreateEvaluadorComponent } from './components/create-evaluador/create-evaluador.component';
import { ListaExamenesComponent } from './components/lista-examenes/lista-examenes.component';
import { CreateExamenComponent } from './components/create-examen/create-examen.component';

const routes: Routes = [
  { path: '', redirectTo: 'inscritos', pathMatch: 'full' },
  { path: 'inscritos', component: ListaInscritosComponent },
  { path: 'inscritos/:id', component: DetallesInscritoComponent },
  { path: 'create', component: CreateInscritoComponent },
  { path: 'evaluadores', component: ListaEvaluadoresComponent},
  { path: 'createEvaluador', component:CreateEvaluadorComponent},
  { path: 'examenes', component: ListaExamenesComponent},
  { path: 'createExamen', component: CreateExamenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
