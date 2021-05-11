import { Component, OnInit } from '@angular/core';
import { Evaluador } from '../../models/evaluador'
import { EvaluadorService} from '../../services/evaluador.service'

@Component({
  selector: 'app-lista-evaluadores',
  templateUrl: './lista-evaluadores.component.html',
  styleUrls: ['./lista-evaluadores.component.css']
})
export class ListaEvaluadoresComponent implements OnInit {
  
  evaluadores:Evaluador[];

  constructor(private evaluadorService: EvaluadorService) { }

  ngOnInit(): void {
    this.evaluadorService.readAll()
    .subscribe(
      response => {
        this.evaluadores=response.response;
        console.log(this.evaluadores);
      },
      error => {
        console.log(error);
      }
    );
  }

}
