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
import { Receta } from '../../../models/receta';
import { Subscription } from 'rxjs';
import { MedicineInfo } from '../../../models/medicineInfo';
import { RxInfo } from '../../../models/RxInfo';
import { ActualizacionCorrectaComponent } from '../act-correcta/act-correcta.component';
import { ErrorDialogComponent } from '../../../shared/error-dialog';
@Component({
  selector: 'app-modificar-receta',
  standalone: true,
  imports: [EncabezadoComponent,CommonModule,FormsModule, SearchModalComponent],
  templateUrl: './modificar-receta.component.html',
  styleUrl: './modificar-receta.component.scss'
})
export class ModificarRecetaComponent implements OnInit, OnDestroy {
  subs = new Subscription;
  rxCode: string;
  rxInfo: RxInfo;
  medicamentos: MedicineInfo[];
  flag: boolean = false;
  loading: boolean = false;
  medicamentoActual: Medicamento;

  showValidation: boolean = false;

  constructor(private router: Router, private rxService: RxDigitalService, public dialog: MatDialog, private activatedRoute: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    this.subs.add(this.activatedRoute.params.subscribe({
      next: (params) => {
        this.rxCode = params["id"];
      }
    }));
    this.subs.add(this.rxService.getRx(this.rxCode).subscribe({
      next: (info) => {
        this.rxInfo = info.rxInfo;
        this.medicamentos = info.medicineList;
      }
    }));
  }

  modificarReceta() {

    this.showValidation = true; // Marca para mostrar mensajes
    this.flag = false;
    if ( !this.rxInfo?.diagnostico || !this.medicamentos || this.medicamentos.length == 0) {
      return;
    }


    this.medicamentos.forEach(med => {
      if (!med.indicaciones || med.indicaciones === '') {
        this.flag = true;
        return;
      }
    });

    if (this.flag) {
      return;
    }

    let receta: RecetaNueva = new RecetaNueva();

    receta.doctorRegistration = this.rxInfo.matricula;
    receta.patientId = this.rxInfo.dni;
    this.medicamentos.forEach(element => {
      var med: MedicamentoReceta = {
        medicineId: element.medicineId,
        indications: element.indicaciones
      };

      receta.medicines.push(med);
    });
    receta.diagnostic = this.rxInfo.diagnostico;
    receta.indications = this.rxInfo.indicaciones;
    this.loading = true;

    this.rxService.updatePrescription(this.rxCode, receta).subscribe({
      next: (res) => {
        this.loading = false;
        const dialogRef = this.dialog.open(ActualizacionCorrectaComponent, {
          width: '400px'
        });

        dialogRef.afterClosed().subscribe({
          next: (flag) => {
            this.router.navigate(['/ver-recetas-paciente/' + this.rxInfo.dni]);
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

  volver() {
    this.location.back();
  }

  onItemSelected(med: Medicamento) {
    this.medicamentoActual = med;

    let medinfo: MedicineInfo = {
      indicaciones: med.indications,
      medicineId: med.medicineId,
      nombreComercial: med.nombreComercial,
      presentacion: med.presentacion,
      concentracion: med.concentracion
    }

    this.medicamentos.push(medinfo);
  }

  clearSelection() {
    this.medicamentos = [];
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
