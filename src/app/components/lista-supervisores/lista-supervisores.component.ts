import { Component, OnInit } from '@angular/core';
import { Supervisor } from '../../models/supervisor'
import { SupervisorService} from '../../services/supervisor.service'

@Component({
  selector: 'app-lista-supervisores',
  templateUrl: './lista-supervisores.component.html',
  styleUrls: ['./lista-supervisores.component.css']
})
export class ListaSupervisoresComponent implements OnInit {
  
  supervisores:Supervisor[];

  constructor(private supervisorService: SupervisorService) { }

  ngOnInit(): void {
    this.supervisorService.readAll()
    .subscribe(
      response => {
        this.supervisores=response.response;
        console.log(this.supervisores);
      },
      error => {
        console.log(error);
      }
    );
  }

}
