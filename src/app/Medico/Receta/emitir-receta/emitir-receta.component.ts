import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import necesario
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from '../../../models/medico';
import { Paciente } from '../../../models/paciente';
import { RxDigitalService } from '../../../services/rx-digital.service';
import { Medicamento } from '../../../models/medicamento';
import { MedicamentoReceta, RecetaNueva } from '../../../models/receta-nueva';
import { RpStateService } from '../../../services/medic.service';
import { CommonModule, Location } from '@angular/common';
import { SearchModalComponent } from '../modal/search-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';
import { Subscription } from 'rxjs';
import { CancelarRecetaComponent } from '../cancelar-receta/cancelar-receta.component';

@Component({
  selector: 'app-emitir-receta',
  standalone: true,
  imports: [FormsModule, CommonModule,EncabezadoComponent],
  templateUrl: './emitir-receta.component.html',
  styleUrl: './emitir-receta.component.scss'
})
export class EmitirRecetaComponent implements OnInit, OnDestroy {

  medico: Medico;
  paciente: Paciente;
  medicamentoActual: Medicamento;
  medicamentos: Medicamento[] = [];

  showModal: boolean = false;
  diagnostic: string;
  indications: string;
  subs = new Subscription;
  pacienteDni: number;
  submitted: boolean;
  
  constructor(private router: Router,
    private rxDigitalService: RxDigitalService,
    private stateService: RpStateService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit(): void {
    this.subs.add(this.activatedRoute.params.subscribe({
      next: (params) => {
        this.pacienteDni = params["id"];
      }
    }));
    this.subs.add(this.stateService.getPatientInfo(this.pacienteDni).subscribe({
      next: (patient) => {
        this.paciente = patient;
      }
    }));
    this.subs.add(this.stateService.getMedicInfo().subscribe({
      next: (medic) => {
        this.medico = medic;
      }
    }));
  }

  formaEnvio: string = 'email'; // Valor por defecto

  emitirReceta() {
    // Validar si el diagnóstico está vacío antes de proceder
    if (!this.diagnostic) {
      console.log('El diagnóstico es obligatorio');
      return; 
    }
    
    let receta: RecetaNueva = new RecetaNueva();

    if (this.formaEnvio === 'whatsapp') {
      receta.channels = 1;
    } else if (this.formaEnvio === 'email') {
      receta.channels = 2;
    }
    receta.doctorRegistration = this.medico.registrationId;
    receta.patientId = this.paciente.dni;
    this.medicamentos.forEach(element => {
      debugger;
      var med: MedicamentoReceta = {
        medicineId: element.medicineId,
        indications: element.indications
      };

      receta.medicines.push(med);
    });
    receta.diagnostic = this.diagnostic;
    receta.indications = this.indications;

    this.rxDigitalService.emitPrescription(receta).subscribe({
      next: (res) => this.router.navigate(['/emision-correcta']),
      error: (err) => console.log(err)
    });
  }

  cancelar() {
    const dialogRef = this.dialog.open(CancelarRecetaComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe({
      next: (flag) => {
        if (flag) {
          this.location.back();
        }
      }
    });
  }

  onItemSelected(med: Medicamento) {
    this.medicamentoActual = med;
    this.medicamentos.push(med);
    this.showModal = false;
  }

  clearSelection() {
    this.medicamentos = [];
  }

  anadirMedicamento() {
    const dialogRef = this.dialog.open(SearchModalComponent, {
      width: '600px',
      height:'400px'
    });

    dialogRef.afterClosed().subscribe({
      next: (med) => {
        this.onItemSelected(med);
      }
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
