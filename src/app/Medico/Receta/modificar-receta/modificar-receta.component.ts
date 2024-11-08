import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import necesario
import { Router } from '@angular/router';
import { Medico } from '../../../models/medico';
import { Paciente } from '../../../models/paciente';
import { RxDigitalService } from '../../../services/rx-digital.service';
import { Medicamento } from '../../../models/medicamento';
import { RecetaNueva } from '../../../models/receta-nueva';
import { RpStateService } from '../../../services/medic.service';
import { CommonModule } from '@angular/common';
import { SearchModalComponent } from '../modal/search-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { EncabezadoComponent } from '../../../encabezado/encabezado.component';
import { Receta } from '../../../models/receta';
@Component({
  selector: 'app-modificar-receta',
  standalone: true,
  imports: [EncabezadoComponent,CommonModule,FormsModule,SearchModalComponent],
  templateUrl: './modificar-receta.component.html',
  styleUrl: './modificar-receta.component.scss'
})
export class ModificarRecetaComponent implements OnInit {
  medico: Medico;
  paciente: Paciente;
  medicamento: Medicamento;

  showModal: boolean = false;
  diagnostic: string;
  indications: string;
  receta: Receta;

  constructor(private router: Router, private rxDigitalService: RxDigitalService,
    private medicService: RpStateService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  //  this.medico = this.medicService.getMedicData();
    //this.paciente = this.medicService.getPatientData();
  }

  formaEnvio: string = 'email'; // Valor por defecto

  modificarReceta() {


  }

}
