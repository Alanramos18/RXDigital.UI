import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from './src/app/services/paciente.service';  // Asegúrate de tener un servicio para manejar la lógica de datos

@Component({
  selector: 'app-ver-detalle-paciente',
  templateUrl: './ver-detalle-paciente.component.html',
  styleUrls: ['./ver-detalle-paciente.component.scss']
})
export class VerDetallePacienteComponent implements OnInit {

  paciente: any;  // Define un modelo para el paciente en un archivo separado si es necesario

  constructor(
    private route: ActivatedRoute,
   // private pacienteService: PacienteService
  ) {}

  ngOnInit(): void {
    const pacienteId = this.route.snapshot.paramMap.get('id');
    this.obtenerDetallePaciente(pacienteId);
  }

  obtenerDetallePaciente(id: string): void {
    this.pacienteService.getPacienteById(id).subscribe(
      data => this.paciente = data,
      error => console.error('Error al obtener los detalles del paciente', error)
    );
  }

  volver(): void {
    window.history.back();  // Puedes cambiar esto a una navegación de Angular si prefieres
  }
}
