import { Component, OnInit } from '@angular/core';
import { MedicService } from '../../../services/medic.service';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from '../../../encabezado/encabezado.component';
import { Paciente } from '../../../models/paciente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-detalle-paciente',
  templateUrl: './ver-detalle-paciente.component.html',
  standalone: true,
  imports: [CommonModule, EncabezadoComponent],
  styleUrls: ['./ver-detalle-paciente.component.scss']
})
export class VerDetallePacienteComponent implements OnInit {

  paciente: Paciente | null = null;  // Asegúrate de que `Paciente` esté correctamente tipado
  //paciente: Paciente;
  constructor(private medicData: MedicService, private router: Router) {}

  ngOnInit(): void {
    this.paciente = this.medicData.getPatientData();
    console.log(this.paciente);
  }

  volver(): void {
    this.router.navigate(['/buscar-paciente']); // Cambia '/ruta-a-tu-pantalla-anterior' por la ruta específica
  }
}

