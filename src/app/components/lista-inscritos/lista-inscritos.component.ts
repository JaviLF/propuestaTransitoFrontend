import { Component, OnInit } from '@angular/core';
import { InscritoService } from '../../services/inscrito.service'
import { Inscrito } from '../../models/inscrito'
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-inscritos',
  templateUrl: './lista-inscritos.component.html',
  styleUrls: ['./lista-inscritos.component.css']
})
export class ListaInscritosComponent implements OnInit {

  inscritos: Inscrito[];

  constructor(private inscritoService: InscritoService, private router:Router) { }

  ngOnInit(): void {
    this.inscritoService.readAll()
    .subscribe(
      response => {
        this.inscritos=response.response;
        console.log(this.inscritos);
      },
      error => {
        console.log(error);
      }
    );
  }

  DetallesInscrito(id): void{
    const urlDetails: string[] = ["/api/inscritos/"+id];
    this.router.navigate(urlDetails);
  }

}
