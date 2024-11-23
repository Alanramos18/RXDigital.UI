import { Component, OnDestroy, OnInit } from '@angular/core';
import { EncabezadoComponent } from '../../shared/encabezado/encabezado.component';
import { DetalleRecetaComponent } from '../../DetalleReceta/detalle-receta.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MsjAceptarComponent } from '../../msj-aceptar/msj-aceptar.component';
import { Subscription } from 'rxjs';
import { RxDigitalService } from '../../services/rx-digital.service';
import { RxInfo } from '../../models/RxInfo';
import { MedicineInfo } from '../../models/medicineInfo';
import { BlobOptions } from 'buffer';
import { MatDialog } from '@angular/material/dialog';
import { AcceptRxDialogComponent } from '../../shared/aceptar-receta-dialog';
import { ErrorDialogComponent } from '../../shared/error-dialog';
import { RejectRxResquestDto } from '../../models/rejectRxResquestDto';
import { MotivoRechazoComponent } from '../motivo-rechazo/motivo-rechazo.component';
import { RejectRxDialogComponent } from '../../shared/rechazo-receta-dialog';
import { Farmaceutico } from '../../models/farmaceutico';
import { RpStateService } from '../../services/medic.service';

@Component({
  selector: 'app-revisar-receta',
  standalone: true,
  imports: [EncabezadoComponent, CommonModule, FormsModule],
  templateUrl: './revisar-receta.component.html',
  styleUrl: './revisar-receta.component.scss'
})
export class RevisarRecetaComponent implements OnInit, OnDestroy {
  mostrarMsjAceptar: boolean = false;
  subs = new Subscription;
  rxCode: string;
  rxInfo: RxInfo;
  pharma: Farmaceutico;
  loading: boolean = false;
  medicines: MedicineInfo[];

  constructor(private rxService: RxDigitalService, private stateService: RpStateService, public dialog: MatDialog, private activatedRoute: ActivatedRoute, private location: Location, private router: Router) {}

  ngOnInit(): void {
    this.subs.add(this.activatedRoute.params.subscribe({
      next: (params) => {
        this.rxCode = params["id"];
      }
    }));
    this.subs.add(this.rxService.getRx(this.rxCode).subscribe({
      next: (info) => {
        this.rxInfo = info.rxInfo;
        this.medicines = info.medicineList;
      }
    }));
    this.subs.add(this.stateService.getPharmaInfo().subscribe({
      next: (pharma) => {
        this.pharma = pharma;
      }
    }));
  }

  openAceptarDialog() {
    const dialogRef = this.dialog.open(MsjAceptarComponent, {
      width: '400px'
    });

    setTimeout(() => {
      dialogRef.close();
      this.buscarOtraReceta();  // Navega a la ruta especificada
    }, 3000);  // Espera el tiempo especificado antes de redirigir
  }

  aceptarReceta() {
    this.loading = true;
    this.subs.add(this.rxService.acceptRx(this.rxCode, this.pharma.registrationId).subscribe({
      next: (info) => {
        this.loading = false;
        const dialogRef = this.dialog.open(AcceptRxDialogComponent, {
          width: '600px',
          height:'200px'
        });
    
        dialogRef.afterClosed().subscribe({
          next: (res) => {
            this.router.navigate(['/buscar-receta']);
            }
        });
      },
      error: (err) => {
        this.loading = false;
        const dialogRef = this.dialog.open(ErrorDialogComponent);
        dialogRef.afterClosed().subscribe({
          next: (res) => {
          }
        });
      }
    }));
  }

  rechazarReceta() {
    debugger;
    let body: RejectRxResquestDto = {
      codigo: this.rxCode,
      matricula: this.pharma.registrationId,
      motivoRechazo: null
    }

    const dialogRef = this.dialog.open(MotivoRechazoComponent, {
      width: '900px',
      height:'500px'
    });

    dialogRef.afterClosed().subscribe({
      next: ({res, motivoRechazo}) => {
        if (res) {
          body.motivoRechazo = motivoRechazo;
          this.loading = true;
    this.subs.add(this.rxService.rejectRx(body).subscribe({
      next: (info) => {
        this.loading = false;
        const dialogRef = this.dialog.open(RejectRxDialogComponent, {
          width: '600px',
          height:'200px'
        });
    
        dialogRef.afterClosed().subscribe({
          next: (res) => {
            this.router.navigate(['/buscar-receta']);
            }
        });
      },
      error: (err) => {
        this.loading = false;
        const dialogRef = this.dialog.open(ErrorDialogComponent);
        dialogRef.afterClosed().subscribe({
          next: (res) => {
          }
        });
      }
    }));
        }
        else {
          return;
        }
      }
    });
    
    
  }

  buscarOtraReceta() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
