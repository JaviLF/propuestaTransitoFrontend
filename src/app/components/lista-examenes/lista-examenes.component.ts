import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../../services/examen.service'
import { Examen } from '../../models/examen'

@Component({
  selector: 'app-lista-examenes',
  templateUrl: './lista-examenes.component.html',
  styleUrls: ['./lista-examenes.component.css']
})
export class ListaExamenesComponent implements OnInit {

  examenes: Examen[];

  constructor(private examenService: ExamenService) { }

  ngOnInit(): void {
    this.examenService.readAll()
    .subscribe(
      response => {
        this.examenes=response.response;
        console.log(this.examenes);
      },
      error => {
        console.log(error);
      }
    );
  }

}
