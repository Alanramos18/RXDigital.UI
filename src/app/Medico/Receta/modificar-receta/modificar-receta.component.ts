import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import necesario
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from '../../../models/medico';
import { Paciente } from '../../../models/paciente';
import { RxDigitalService } from '../../../services/rx-digital.service';
import { Medicamento } from '../../../models/medicamento';
import { RecetaNueva } from '../../../models/receta-nueva';
import { RpStateService } from '../../../services/medic.service';
import { CommonModule, Location } from '@angular/common';
import { SearchModalComponent } from '../modal/search-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';
import { Receta } from '../../../models/receta';
import { Subscription } from 'rxjs';
import { MedicineInfo } from '../../../models/medicineInfo';
import { RxInfo } from '../../../models/RxInfo';
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
  medicines: MedicineInfo[];

  constructor(private rxService: RxDigitalService, public dialog: MatDialog, private activatedRoute: ActivatedRoute, private location: Location) {
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
        this.medicines = info.medicineList;
      }
    }));
  }

  formaEnvio: string = 'email'; // Valor por defecto

  modificarReceta() {


  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
