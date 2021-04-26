import { Component, OnInit } from '@angular/core';
import { SupervisorService} from '../../services/supervisor.service'

@Component({
  selector: 'app-create-supervisor',
  templateUrl: './create-supervisor.component.html',
  styleUrls: ['./create-supervisor.component.css']
})
export class CreateSupervisorComponent implements OnInit {

  supervisor = {
    ci: "99849333",
    nombreCompleto: "Luis Pedro",
    apellidoPaterno: "Mamani",
    apellidoMaterno: "Rodriguez"
    
  };
  submitted = false;
  createdSupervisor: any;

  constructor(private supervisorService:SupervisorService) { }

  ngOnInit(): void {
  }

  createSupervisor(): void {
    const data = {
      ci: this.supervisor.ci,
      nombreCompleto: this.supervisor.nombreCompleto,
      apellidoPaterno: this.supervisor.apellidoPaterno,
      apellidoMaterno: this.supervisor.apellidoMaterno
    };

    this.supervisorService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.createdSupervisor=response.response;
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newSupervisor(): void {
    this.submitted = false;
    this.supervisor = {
      ci: "99849333",
      nombreCompleto: "Luis Pedro",
      apellidoPaterno: "Mamani",
      apellidoMaterno: "Rodriguez"
      
    };
  }

}
