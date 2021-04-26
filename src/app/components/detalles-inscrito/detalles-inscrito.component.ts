import { Component, OnInit } from '@angular/core';
import { InscritoService } from '../../services/inscrito.service'
import { Inscrito } from '../../models/inscrito'

@Component({
  selector: 'app-detalles-inscrito',
  templateUrl: './detalles-inscrito.component.html',
  styleUrls: ['./detalles-inscrito.component.css']
})
export class DetallesInscritoComponent implements OnInit {

  inscrito: Inscrito;

  constructor(private inscritoService: InscritoService) { }

  ngOnInit(): void {
    this.inscritoService.read(localStorage.id)
    .subscribe(
      response => {
        this.inscrito=response.response;
        console.log(this.inscrito);
      },
      error => {
        console.log(error);
      }
    );
  }

}
