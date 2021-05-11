import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateInscritoComponent } from './components/create-inscrito/create-inscrito.component';
import { ListaInscritosComponent } from './components/lista-inscritos/lista-inscritos.component';
import { DetallesInscritoComponent } from './components/detalles-inscrito/detalles-inscrito.component';
import { ButtonComponent } from './components/button/button.component';
import { ListaExamenesComponent } from './components/lista-examenes/lista-examenes.component';
import { CreateExamenComponent } from './components/create-examen/create-examen.component';
import { CreateEvaluadorComponent } from './components/create-evaluador/create-evaluador.component';
import { ListaEvaluadoresComponent } from './components/lista-evaluadores/lista-evaluadores.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateInscritoComponent,
    ListaInscritosComponent,
    DetallesInscritoComponent,
    ButtonComponent,
    ListaExamenesComponent,
    CreateExamenComponent,
    CreateEvaluadorComponent,
    ListaEvaluadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
