import { Component, OnInit } from '@angular/core';
import { InscritoService } from '../../services/inscrito.service'

@Component({
  selector: 'app-create-inscrito',
  templateUrl: './create-inscrito.component.html',
  styleUrls: ['./create-inscrito.component.css']
})
export class CreateInscritoComponent implements OnInit {

  inscrito = {
    ci: "64002020",
    nombreCompleto: "Andres",
    apellidoPaterno: "Ruiz",
    apellidoMaterno: "Montoya",
    categoriaExamen: "M",
    tipoExamen: "TP",
    fechaUltimoExamen: 2021-5-4,
    edad: 3
    
  };
  submitted = false;
  createdInscrito: any;

  constructor(private inscritoService: InscritoService) { }

  ngOnInit(): void {
  }

  createInscrito(): void {
    const data = {
      ci: this.inscrito.ci,
      nombreCompleto: this.inscrito.nombreCompleto,
      apellidoPaterno: this.inscrito.apellidoPaterno,
      apellidoMaterno: this.inscrito.apellidoMaterno,
      categoriaExamen: this.inscrito.categoriaExamen,
      tipoExamen: this.inscrito.tipoExamen,
      fechaUltimoExamen: this.inscrito.fechaUltimoExamen,
      edad: this.inscrito.edad
    };

    this.inscritoService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.createdInscrito=response.response;
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newInscrito(): void {
    this.submitted = false;
    this.inscrito = {
    ci: "64002020",
    nombreCompleto: "Andres",
    apellidoPaterno: "Ruiz",
    apellidoMaterno: "Montoya",
    categoriaExamen: "M",
    tipoExamen: "TP",
    fechaUltimoExamen: 2021-5-4,
    edad: 3
      
    };
  }

}
