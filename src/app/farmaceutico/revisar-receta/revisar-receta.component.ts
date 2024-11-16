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
  medicines: MedicineInfo[];

  constructor(private rxService: RxDigitalService, public dialog: MatDialog, private activatedRoute: ActivatedRoute, private location: Location) {}

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
  }

  async aceptarReceta() {
    var res = await this.processRx(true);
    //this.router.navigate(['/buscar-receta']);
  }

  rechazarReceta() {
    this.processRx(false);
    // this.router.navigate(['/motivo-rechazo']);
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

  // openRechazarDialog() {

  // }

  processRx(isAccepted: boolean): Promise<boolean> {
    return new Promise((resolve) => {
      this.subs.add(this.rxService.processRx(this.rxCode, isAccepted).subscribe({
        next: (info) => { 
          resolve(true);
        },
        error: (err) => {
          resolve(false);
        }
      }))
    });
  }

  buscarOtraReceta() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
