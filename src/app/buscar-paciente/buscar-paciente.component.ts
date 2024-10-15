import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscar-paciente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './buscar-paciente.component.html',
  styleUrl: './buscar-paciente.component.scss'
})
export class BuscarPacienteComponent {
  dniPaciente: string = '';
  nombreUsuario: string = 'Nombre del médico'; // Esto sería dinámico.

  buscarPaciente() {
    // Pseudocódigo para buscar paciente
    /*
      this.pacienteService.buscarPaciente(this.dniPaciente).subscribe(paciente => {
        // Redirigir a la pantalla de Ver recetas del paciente
      });
    */
  }

  agregarPaciente() {
    // Redirigir a la pantalla para agregar un nuevo paciente
  }
}


