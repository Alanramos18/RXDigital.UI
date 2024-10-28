import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RxDigitalService } from '../services/rx-digital.service';
import { CommonModule } from '@angular/common';
import { Paciente } from '../models/paciente';
import { MedicService } from '../services/medic.service';

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
    private medicData: MedicService
  ) {}

  ngOnInit(): void {
    this.paciente = this.medicData.getPatientData();
    console.log(this.paciente)
  }

  volver(): void {
    window.history.back();  // Puedes cambiar esto a una navegación de Angular si prefieres
  }
}
