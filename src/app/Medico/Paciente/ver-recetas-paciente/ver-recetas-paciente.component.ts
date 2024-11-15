import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Receta } from '../../../models/receta';
import { ActivatedRoute, Router } from '@angular/router';
import { RxDigitalService } from '../../../services/rx-digital.service';
import { Paciente } from '../../../models/paciente';
import { RpStateService } from '../../../services/medic.service';
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog';
import { EliminarRecetaComponent } from '../../Receta/eliminar-receta/eliminar-receta.component';

@Component({
  selector: 'app-ver-recetas-paciente',
  standalone: true,
  imports: [CommonModule, EncabezadoComponent, FormsModule],
  templateUrl: './ver-recetas-paciente.component.html',
  styleUrls: ['./ver-recetas-paciente.component.scss']
})
export class VerRecetasPacienteComponent implements OnInit, OnDestroy {
  searchQuery: string = '';
  recetas: Receta[];
  recetasFiltradas: Receta[];
  fechaEmision: Date = new Date('2024-06-01');
  paciente: Paciente;
  pacienteDni: number;
  subs = new Subscription;
  codeFilter = "";

  constructor(private rxService: RxDigitalService,
    private stateService: RpStateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.subs.add(this.activatedRoute.params.subscribe({
      next: (params) => {
        this.pacienteDni = params["id"];
      }
    }));
    this.subs.add(this.rxService.getPrescriptions(this.pacienteDni).subscribe({
      next: (res) => {
        const codigosUnicos = new Set<string>();
        this.recetas = res.filter((item) => {
          const isUnique = !codigosUnicos.has(item.prescriptionId);
          codigosUnicos.add(item.prescriptionId);
          return isUnique;
        });
        this.recetasFiltradas = this.recetas;
      },
      error: (err) => console.log(err)
    }));
    this.subs.add(this.stateService.getPatientInfo(this.pacienteDni).subscribe({
      next: (patient) => {
        this.paciente = patient;
      }
    }));

  }

  filterCodes(): void {
    this.recetasFiltradas = this.recetas.filter(receta =>
      receta.prescriptionId.toLowerCase().includes(this.codeFilter.toLowerCase())
    );
  }

  verDetallePaciente(){
    this.router.navigate(['/ver-detalle-paciente/' + this.pacienteDni]);
  }

  modificarPaciente(){
    this.router.navigate(['/modificar-paciente/' + this.pacienteDni]);
  }

  generarReceta() {
    // Implementar la lógica para generar una nueva receta
    this.router.navigate(['/emitir-receta/' + this.pacienteDni]);
  }

  verDetalleReceta() {
    // Implementar la lógica para generar una nueva receta
    console.log('Ver detalle receta');
    //this.router.navigate(['/ver-detalle-receta']);
  }

  modificarReceta() {
    // Implementar la lógica para generar una nueva receta
    console.log('Modificar receta');
    //this.router.navigate(['/modificar-receta']);
  }

  eliminarReceta(prescriptionCode: string) {
    const dialogRef = this.dialog.open(EliminarRecetaComponent);

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.subs.add(this.rxService.deletePrescription(prescriptionCode).subscribe({
            next: x => {
              window.location.reload();
            },
            error: (err) => console.log(err)
          }));
        }
      }
    });
  }

  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.subs.add(this.rxService.deletePatient(this.pacienteDni).subscribe({
            next: x => {
              this.router.navigate(['buscar-paciente']);
            },
            error: (err) => console.log(err)
          }));
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

