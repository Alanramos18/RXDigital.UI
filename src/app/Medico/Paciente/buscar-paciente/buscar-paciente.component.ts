import { Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RxDigitalService } from '../../../services/rx-digital.service';
import { MedicService } from '../../../services/medic.service';
import { isPlatformBrowser } from '@angular/common';
import { EncabezadoComponent } from '../../../encabezado/encabezado.component';

@Component({
  selector: 'app-buscar-paciente',
  standalone: true,
  imports: [FormsModule, EncabezadoComponent],
  templateUrl: './buscar-paciente.component.html',
  styleUrl: './buscar-paciente.component.scss'
})
export class BuscarPacienteComponent {
  dniPaciente: number;
  nombreUsuario: string = 'Nombre del médico'; // Esto sería dinámico.

  constructor(private rxService: RxDigitalService, private medicService: MedicService, private router: Router) {}


  buscarPaciente() {
      this.rxService.getPatientInfo(this.dniPaciente).subscribe({
        next: (res) => {
          if(res.patientId > 0)
          {
            this.medicService.setPatientData(res);

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


