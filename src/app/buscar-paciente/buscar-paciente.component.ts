import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RxDigitalService } from '../services/rx-digital.service';

@Component({
  selector: 'app-buscar-paciente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './buscar-paciente.component.html',
  styleUrl: './buscar-paciente.component.scss'
})
export class BuscarPacienteComponent {
  dniPaciente: number;
  nombreUsuario: string = 'Nombre del médico'; // Esto sería dinámico.

  constructor(private rxService: RxDigitalService, private router: Router) {}

  buscarPaciente() {
    // Pseudocódigo para buscar paciente
    /*
      this.pacienteService.buscarPaciente(this.dniPaciente).subscribe(paciente => {
        // Redirigir a la pantalla de Ver recetas del paciente
      });
    */

      this.rxService.getPatientInfo(this.dniPaciente).subscribe({
        next: (res) => {
          if(res.id > 0)
          {
            this.router.navigate(['ver-recetas-paciente']);
          }
        },
        error: (err) => console.log('Hubo un error. Por favor intenta mas tarde')
      });

  }

  agregarPaciente() {
    // Redirigir a la pantalla para agregar un nuevo paciente
  }
}


