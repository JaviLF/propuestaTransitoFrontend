import { Component, OnInit } from '@angular/core';
import { EvaluadorService} from '../../services/evaluador.service'

@Component({
  selector: 'app-create-evaluador',
  templateUrl: './create-evaluador.component.html',
  styleUrls: ['./create-evaluador.component.css']
})
export class CreateEvaluadorComponent implements OnInit {

  evaluador = {
    ci: "99849333",
    nombreCompleto: "Luis Pedro",
    apellidoPaterno: "Mamani",
    apellidoMaterno: "Rodriguez",
    gradoPolicial: "Sbtte",
    fechaAlta: 2021-5-4,
    fechaBaja: 2021-5-4,
    
  };
  submitted = false;
  createdEvaluador: any;

  constructor(private evaluadorService:EvaluadorService) { }

  ngOnInit(): void {
  }

  createEvaluador(): void {
    const data = {
      ci: this.evaluador.ci,
      nombreCompleto: this.evaluador.nombreCompleto,
      apellidoPaterno: this.evaluador.apellidoPaterno,
      apellidoMaterno: this.evaluador.apellidoMaterno,
      gradoPolicial: this.evaluador.gradoPolicial,
      fechaAlta: this.evaluador.fechaAlta,
      fechaBaja: this.evaluador.fechaBaja,

    };

    this.evaluadorService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.createdEvaluador=response.response;
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newEvaluador(): void {
    this.submitted = false;
    this.evaluador = {
      ci: "99849333",
      nombreCompleto: "Luis Pedro",
      apellidoPaterno: "Mamani",
      apellidoMaterno: "Rodriguez",
      gradoPolicial: "Sbtte",
      fechaAlta: 2021-5-4,
      fechaBaja: 2021-5-4,
      
    };
  }

}
