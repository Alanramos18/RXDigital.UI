import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Paciente } from '../../../models/paciente';
import { CommonModule, Location } from '@angular/common';
import { EncabezadoComponent } from "../../../shared/encabezado/encabezado.component";
import { RpStateService } from '../../../services/medic.service';
import { Subscription, forkJoin } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RxDigitalService } from '../../../services/rx-digital.service';
import { ObraSocial } from '../../../models/obraSocial';
import { MatDialog } from '@angular/material/dialog';
import { UpdatePaciDialogComponent } from '../../../shared/actualizar-paci-dialog';
import { ErrorDialogComponent } from '../../../shared/error-dialog';

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
  obraSociales: ObraSocial[];
  planes: string[];
  loading: boolean = false;
  mostrarAfi: boolean = true;
  fechaInscri: Date;

  constructor( private rxService: RxDigitalService, private stateService: RpStateService, private activatedRoute: ActivatedRoute, private location: Location, private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loading = true;
    this.pacienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      numeroAfiliado: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      direccion: ['', Validators.required],
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
        this.loading = false;
      }
    }));
    
    this.subs.add(
      forkJoin({
        patient: this.stateService.getPatientInfo(this.pacienteDni),
        os: this.rxService.getSocialWorks()
      }).subscribe({
        next: ({patient, os}) => {
          if (patient?.obraSocial === 'Particular') {
              this.mostrarAfi = false;
          } else {
            this.mostrarAfi = true;
          }
          this.paciente = patient;
          this.fechaInscri = patient.fechaInscripcion;
          this.obraSociales = os;
          this.planes = this.obraSociales
            .filter(obraSocial => obraSocial.name === this.paciente.obraSocial)
            .map(obraSocial => obraSocial.socialPlan);
          this.pacienteForm.patchValue({
            nombre: patient?.nombre,
            apellido: patient?.apellido,
            dni: patient?.dni,
            numeroAfiliado: patient?.numeroAfiliado,
            fechaNacimiento: new Date(patient?.fechaNacimiento).toISOString().split('T')[0],
            genero: patient?.genero,
            nacionalidad: patient?.nacionalidad,
            direccion: patient?.domicilio,
            celular: patient?.celular,
            telefono: patient?.telefono,
            email: patient?.email,
            localidad: patient?.localidad,
            provincia: patient?.provincia,
            obraSocialId: this.obraSociales?.find(os => os.name === this.paciente?.obraSocial)?.socialWorkId,
            planSocial: this.planes.findIndex(plan => plan === this.paciente?.planSocial) + 1
          });

          this.loading = false;
        },
        error: (err) => {
          console.log(err);
        }
      })
    );
  }

  onSelectionChange(e: Event) {
    let index = Number((<HTMLTextAreaElement>e.target).value);

    let name = this.obraSociales[index - 1].name;

    if (name === 'Particular') {
      this.mostrarAfi = false;
    } else {
      this.mostrarAfi = true;
    }

    this.planes = this.obraSociales
        .filter(obraSocial => obraSocial.name === name)
        .map(obraSocial => obraSocial.socialPlan);
  }

  volver(): void {
    this.location.back();
  }

  guardar() {
    this.loading = true;
    this.paciente = this.pacienteForm.value as Paciente;
    this.subs.add(
      this.rxService.updatePatient(this.pacienteDni, this.paciente).subscribe({
        next: (res) => {
          const dialogRef = this.dialog.open(UpdatePaciDialogComponent);

          dialogRef.afterClosed().subscribe({
            next: (res) => {
              this.loading = false;
              this.location.back();
            }
          });
        },
        error: (err) => {
          const dialogRef = this.dialog.open(ErrorDialogComponent);

          dialogRef.afterClosed().subscribe({
            next: (res) => {
              this.loading = false;
            }
          });
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
