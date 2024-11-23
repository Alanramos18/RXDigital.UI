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
import { EmisionCorrectaComponent } from '../emision-correcta/emision-correcta.component';
import { ErrorDialogComponent } from '../../../shared/error-dialog';

@Component({
  selector: 'app-emitir-receta',
  standalone: true,
  imports: [FormsModule, CommonModule, EncabezadoComponent],
  templateUrl: './emitir-receta.component.html',
  styleUrl: './emitir-receta.component.scss'
})
export class EmitirRecetaComponent implements OnInit, OnDestroy {

  medico: Medico;
  paciente: Paciente;
  medicamentoActual: Medicamento;
  medicamentos: Medicamento[] = [];

  diagnostic: string;
  indications: string;
  subs = new Subscription;
  pacienteDni: number;
  flag: boolean = false;
  loading: boolean = false;

  showValidation: boolean = false;


  constructor(private router: Router,
    private rxDigitalService: RxDigitalService,
    private stateService: RpStateService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.subs.add(this.activatedRoute.params.subscribe({
      next: (params) => {
        this.pacienteDni = params["id"];
        this.loading = false;
      }
    }));
    this.subs.add(this.stateService.getPatientInfo(this.pacienteDni).subscribe({
      next: (patient) => {
        this.paciente = patient;
        this.loading = false;
      }
    }));
    this.subs.add(this.stateService.getMedicInfo().subscribe({
      next: (medic) => {
        this.medico = medic;
        this.loading = false;
      }
    }));
  }

  emitirReceta() {
    this.showValidation = true; // Marca para mostrar mensajes
    this.flag = false;
    if (!this.diagnostic || !this.medicamentos || this.medicamentos.length == 0) {
      return;
    }


    this.medicamentos.forEach(med => {
      if (!med.indications || med.indications === '') {
        this.flag = true;
        return;
      }
    });

    if (this.flag) {
      return;
    }

    let receta: RecetaNueva = new RecetaNueva();

    receta.doctorRegistration = this.medico.registrationId;
    receta.patientId = this.paciente.dni;
    this.medicamentos.forEach(element => {
      var med: MedicamentoReceta = {
        medicineId: element.medicineId,
        indications: element.indications
      };

      receta.medicines.push(med);
    });
    receta.diagnostic = this.diagnostic;
    receta.indications = this.indications;
    this.loading = true;

    this.rxDigitalService.emitPrescription(receta).subscribe({
      next: (res) => {
        this.loading = false;
        const dialogRef = this.dialog.open(EmisionCorrectaComponent, {
          width: '400px'
        });

        dialogRef.afterClosed().subscribe({
          next: (flag) => {
            this.router.navigate(['/ver-recetas-paciente/' + this.pacienteDni]);
          }
        });
      },
      error: (err) => {
        const dialogRef = this.dialog.open(ErrorDialogComponent);

        dialogRef.afterClosed().subscribe({
          next: (res) => {
            this.loading = false;
          }
        });
      }
    });

    this.showValidation = false;
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
  }

  clearSelection() {
    this.medicamentos = [];
  }

  anadirMedicamento() {
    const dialogRef = this.dialog.open(SearchModalComponent, {
      width: '600px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe({
      next: (med) => {
        if (med) {
          this.onItemSelected(med);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
