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
import { debug } from 'console';
import { msjNoHabilitadoDialogComponent } from '../../../shared/msjNoHabilitado-dialog';

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
  pacienteEstado: boolean;
  loading: boolean;

  constructor(private rxService: RxDigitalService,
    private stateService: RpStateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loading = true;
    this.subs.add(this.activatedRoute.params.subscribe({
      next: (params) => {
        this.pacienteDni = params["id"];
        this.loading = false;
      }
    }));
    this.subs.add(this.rxService.getPrescriptions(this.pacienteDni).subscribe({
      next: (res) => {
        const codigosUnicos = new Set<string>();
        this.recetas = res.filter((item) => {
          const isUnique = !codigosUnicos.has(item.codigoReceta);
          codigosUnicos.add(item.codigoReceta);
          return isUnique;
        });
        this.recetasFiltradas = this.recetas;
        this.loading = false;
      },
      error: (err) => console.log(err)
    }));
    this.subs.add(this.stateService.getPatientInfo(this.pacienteDni).subscribe({
      next: (patient) => {
        this.paciente = patient;
        this.pacienteEstado = patient.habilitacion;
        this.loading = false;
      }
    }));

  }

  filterCodes(): void {
    this.recetasFiltradas = this.recetas.filter(receta =>
      receta.codigoReceta.toLowerCase().includes(this.codeFilter.toLowerCase())
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

  mostrarMensajeInhabilitado() {
    const dialogRef = this.dialog.open(msjNoHabilitadoDialogComponent, {
      width: '600px',
      height:'200px'
    });
    //alert('No se puede generar receta porque el paciente está deshabilitado para recibir recetas.');
  }

  verDetalleReceta(codigoReceta: string) {
    this.router.navigate(['/ver-detalle-receta/' + codigoReceta]);
  }

  modificarReceta(codigoReceta: string) {
    this.router.navigate(['/modificar-receta/' + codigoReceta]);
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

  toggleEstado() {
    if(this.paciente.habilitacion) {
      this.pacienteEstado = false;
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '600px',
        height:'300px'
      });
  
      dialogRef.afterClosed().subscribe({
        next: (res) => {
          if (res) {
            this.loading = true;
            this.subs.add(this.rxService.deletePatient(this.pacienteDni).subscribe({
              next: x => {
                this.loading = false;
                this.router.navigate(['buscar-paciente']);
              },
              error: (err) => console.log(err)
            }));
          } else {
            this.pacienteEstado = true;
          }
        }
      });
    } else {
      this.loading = true;
      this.pacienteEstado = true;
      this.subs.add(this.rxService.deletePatient(this.pacienteDni).subscribe({
        next: x => {
          this.loading = false;
          this.paciente.habilitacion = true;
        },
        error: (err) => console.log(err)
      }));
    }
  }

  eliminarPaciente() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '600px',
      height:'300px'
    });

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          console.log(res);
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

  volver(){
    this.router.navigate(['buscar-paciente']);
  }
}

