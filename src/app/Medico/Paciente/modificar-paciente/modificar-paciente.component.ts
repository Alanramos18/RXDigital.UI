import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Paciente } from '../../../models/paciente';
import { CommonModule, Location } from '@angular/common';
import { EncabezadoComponent } from "../../../shared/encabezado/encabezado.component";
import { RpStateService } from '../../../services/medic.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-paciente',
  templateUrl: './modificar-paciente.component.html',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    EncabezadoComponent
],
  styleUrls: ['./modificar-paciente.component.scss']
})
export class ModificarPacienteComponent implements OnInit, OnDestroy {
  paciente: Paciente;  // Asegúrate de que `Paciente` esté correctamente tipado
  subs = new Subscription;
  pacienteDni: number;
  constructor(private stateService: RpStateService, private activatedRoute: ActivatedRoute, private location: Location) {}

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
  }

  volver(): void {
    this.location.back();
  }

  guardar() {
    console.log(this.paciente);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
