import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import necesario
import { Router } from '@angular/router';
import { MedicService } from '../services/medic.service';
import { Medico } from '../models/medico';
import { Paciente } from '../models/paciente';
import { RxDigitalService } from '../services/rx-digital.service';
import { Medicamento } from '../models/medicamento';
import { RecetaNueva } from '../models/receta-nueva';

@Component({
  selector: 'app-emitir-receta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emitir-receta.component.html',
  styleUrl: './emitir-receta.component.scss'
})
export class EmitirRecetaComponent implements OnInit{

  medico: Medico;
  paciente: Paciente;
  medicamento: Medicamento;

  listaMedicamentos: Medicamento[];
  nombreMedicamento: string;
  diagnostic: string;
  indications: string;

  constructor(private router: Router, private rxDigitalService: RxDigitalService, private medicService: MedicService) {
  }

  ngOnInit(): void {
    this.medico = this.medicService.getMedicData();
    this.paciente = this.medicService.getPatientData();
  }

  formaEnvio: string = 'email'; // Valor por defecto

  getMedicine() {
    this.rxDigitalService.getMedicine(this.nombreMedicamento).subscribe({
      next: (res) => {
        this.listaMedicamentos = res;

        this.medicamento = this.listaMedicamentos[0];
      },
      error: (err) => console.log(err)
    })
  }

  emitirReceta() {
    let receta: RecetaNueva = new RecetaNueva();

    if (this.formaEnvio === 'whatsapp') {
      receta.channels = 1;
    } else if (this.formaEnvio === 'email') {
      receta.channels = 2;
    }
    receta.doctorRegistration = this.medico.registrationId;
    receta.patientId = this.paciente.patientId;
    receta.medicineId = this.medicamento.medicineId;
    receta.diagnostic = this.diagnostic;
    receta.indications = this.indications;

    this.rxDigitalService.emitPrescription(receta).subscribe({
      next: (res) => this.router.navigate(['/emision-correcta']),
      error: (err) => console.log(err)
    });
  }

  cancelar() {
    // Lógica para cancelar la operación
    console.log('Operación cancelada');
    this.router.navigate(['/cancelar-receta']);
  }
}
