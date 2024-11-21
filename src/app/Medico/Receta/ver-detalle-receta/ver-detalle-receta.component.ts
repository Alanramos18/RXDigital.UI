import { Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';
import { DetalleRecetaComponent } from '../../../DetalleReceta/detalle-receta.component';
import { Subscription } from 'rxjs';
import { RxInfo } from '../../../models/RxInfo';
import { MedicineInfo } from '../../../models/medicineInfo';
import { RxDigitalService } from '../../../services/rx-digital.service';



@Component({
  selector: 'app-ver-detalle-receta',
  standalone: true,
  imports: [CommonModule,EncabezadoComponent], 
  templateUrl: './ver-detalle-receta.component.html',
  styleUrl: './ver-detalle-receta.component.scss'
})

export class VerDetalleRecetaComponent implements OnInit, OnDestroy {
  subs = new Subscription;
  rxCode: string;
  rxInfo: RxInfo;
  medicines: MedicineInfo[];
  
  constructor(private router: Router, private rxService: RxDigitalService, private activatedRoute: ActivatedRoute, private location: Location) { }

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

  volver() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
