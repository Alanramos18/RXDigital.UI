import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
    EncabezadoComponent,
    ReactiveFormsModule,
],
  styleUrls: ['./modificar-paciente.component.scss']
})
export class ModificarPacienteComponent implements OnInit, OnDestroy {
  paciente: Paciente = new Paciente();  // Asegúrate de que `Paciente` esté correctamente tipado
  subs = new Subscription;
  pacienteDni: number;
  pacienteForm: FormGroup;
  constructor(private stateService: RpStateService, private activatedRoute: ActivatedRoute, private location: Location, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.pacienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      numeroAfiliado: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      domicilio: ['', Validators.required],
      celular: ['', Validators.required],
      telefono: [''],
      email: ['', [Validators.required, Validators.email]],
      obraSocialId: [''], 
      planSocial: [''], 
      provincia: [''],
      localidad: [''],
      habilitado: ['']
    });

    this.subs.add(this.activatedRoute.params.subscribe({
      next: (params) => {
        this.pacienteDni = params["id"];
      }
    }));
    this.subs.add(this.stateService.getPatientInfo(this.pacienteDni).subscribe({
      next: (patient) => {
        this.paciente = patient;
        this.pacienteForm.patchValue({
          nombre: patient?.nombre,
          apellido: patient?.apellido,
          dni: patient?.dni,
          numeroAfiliado: patient?.numeroAfiliado,
          fechaNacimiento: new Date(patient?.fechaNacimiento).toISOString().split('T')[0],
          genero: patient?.genero,
          nacionalidad: patient?.nacionalidad,
          domicilio: patient?.domicilio,
          celular: patient?.celular,
          telefono: patient?.telefono,
          email: patient?.email,
          localidad: patient?.localidad,
          provincia: patient?.provincia,
          habilitado: patient?.habilitacion == null ? 'false' : patient?.habilitacion.toString()
        });
      }
    }));
  }

  volver(): void {
    this.location.back();
  }

  guardar() {
    this.paciente = this.pacienteForm.value as Paciente;
    console.log(this.paciente);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
