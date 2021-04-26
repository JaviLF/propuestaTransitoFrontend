import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../../services/examen.service'

@Component({
  selector: 'app-create-examen',
  templateUrl: './create-examen.component.html',
  styleUrls: ['./create-examen.component.css']
})
export class CreateExamenComponent implements OnInit {

  examen = {
    tipo: "transporte pesado",
    fecha: 2021-2-21
    
  };
  submitted = false;
  createdExamen: any;

  constructor( private examenService:ExamenService) { }

  ngOnInit(): void {
  }

  createExamen(): void {
    const data = {
      tipo: this.examen.tipo,
      fecha: this.examen.fecha
    };

    this.examenService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.createdExamen=response.response;
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newExamen(): void {
    this.submitted = false;
    this.examen = {
      tipo: "transporte pesado",
    fecha: 2021-2-21
      
    };
  }

}
