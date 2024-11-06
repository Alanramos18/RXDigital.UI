import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paciente } from '../../../models/paciente';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule aquí
import { EncabezadoComponent } from '../../../encabezado/encabezado.component';


@Component({
  selector: 'app-agregar-paciente',
  templateUrl: './agregar-paciente.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, EncabezadoComponent],
  styleUrls: ['./agregar-paciente.component.scss']
})
export class AgregarPacienteComponent implements OnInit {
  pacienteForm: FormGroup;
  paciente: Paciente = new Paciente();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.pacienteForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        socialNumber: ['', Validators.required],
        birthDay: ['', Validators.required],
        gender: ['', Validators.required],
        nationality: ['', Validators.required],
        address: ['', Validators.required],
        cellphone: ['', Validators.required],
        homePhone: [''],
        email: ['', [Validators.required, Validators.email]],
        socialWorkName: [''], 
        socialPlan: [''], 
        province: [''],
        locality: [''],
        inscriptionDate: ['', Validators.required],
        isAvailable: [false]
    });
  }

  onSubmit(): void {
    if (this.pacienteForm.valid) {
      this.paciente = this.pacienteForm.value as Paciente;
      console.log('Paciente guardado:', this.paciente);
    }
  }

  onCancel(): void {
    this.pacienteForm.reset();
  }
}
