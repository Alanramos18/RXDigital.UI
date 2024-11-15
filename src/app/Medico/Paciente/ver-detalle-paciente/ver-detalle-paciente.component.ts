import { Component, OnDestroy, OnInit } from '@angular/core';
import { RpStateService } from '../../../services/medic.service';
import { CommonModule, Location } from '@angular/common';
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';
import { Paciente } from '../../../models/paciente';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ver-detalle-paciente',
  templateUrl: './ver-detalle-paciente.component.html',
  standalone: true,
  imports: [CommonModule, EncabezadoComponent],
  styleUrls: ['./ver-detalle-paciente.component.scss']
})
export class VerDetallePacienteComponent implements OnInit, OnDestroy {

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

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

