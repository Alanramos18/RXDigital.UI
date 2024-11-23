import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paciente } from '../../../models/paciente';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule aquí
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';
import { RxDigitalService } from '../../../services/rx-digital.service';
import { ObraSocial } from '../../../models/obraSocial';
import { CommonModule, Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { AddPaciDialogComponent } from '../../../shared/agregar-paci-dialog';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/error-dialog';


@Component({
  selector: 'app-agregar-paciente',
  templateUrl: './agregar-paciente.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, EncabezadoComponent, CommonModule],
  styleUrls: ['./agregar-paciente.component.scss']
})
export class AgregarPacienteComponent implements OnInit, OnDestroy {
  pacienteForm: FormGroup;
  paciente: Paciente;
  obraSociales: ObraSocial[];
  planes: string[];
  subs = new Subscription;
  mostrarAfi: boolean = true;
  
  constructor(private fb: FormBuilder, private rxService: RxDigitalService,  private location: Location, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.subs.add(
      this.rxService.getSocialWorks().subscribe({
        next: (res) => {
          this.obraSociales = res;
        },
        error: (err) => {
          console.log(err);
        }
      })
    );
    this.pacienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      numeroAfiliado: [''],
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
      localidad: ['']
    });
  }

  onSubmit(): void {
    if (this.pacienteForm.valid) {
      this.paciente = this.pacienteForm.value as Paciente;
      this.rxService.createPatient(this.paciente).subscribe({
        next: (res) => {
          const dialogRef = this.dialog.open(AddPaciDialogComponent);

          dialogRef.afterClosed().subscribe({
            next: (res) => {
              this.location.back();
            }
          });
        },
        error: (err) => {
          const dialogRef = this.dialog.open(ErrorDialogComponent);

          dialogRef.afterClosed().subscribe({
            next: (res) => {
            }
          });
        }
      })
    }
  }

  onCancel(): void {
    this.pacienteForm.reset();
    this.location.back();
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

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
