import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RxDigitalService } from '../services/rx-digital.service';
import { CommonModule } from '@angular/common';
import { Paciente } from '../models/paciente';

@Component({
  selector: 'app-ver-detalle-paciente',
  templateUrl: './ver-detalle-paciente.component.html',
  standalone: true,
  imports: [
    CommonModule
  ],
  styleUrls: ['./ver-detalle-paciente.component.scss']
})
export class VerDetallePacienteComponent implements OnInit {

  paciente: Paciente;  // Define un modelo para el paciente en un archivo separado si es necesario

  constructor(
    private route: ActivatedRoute,
    private rxService: RxDigitalService
  ) {}

  ngOnInit(): void {
    // const pacienteId = this.route.snapshot.paramMap.get('id');
    this.obtenerDetallePaciente(56789012);
  }

  obtenerDetallePaciente(id: number): void {
    this.rxService.getPatientInfo(id).subscribe({
      next: (data) => this.paciente = data,
      error: (err) => console.error('Error al obtener los detalles del paciente', err)
    });
  }

  volver(): void {
    window.history.back();  // Puedes cambiar esto a una navegación de Angular si prefieres
  }
}
