import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RxDigitalService } from '../../services/rx-digital.service';
import { Subscription } from 'rxjs';
import { Register } from '../../models/register';
import { Router } from '@angular/router';
import { Especialidad } from '../../models/especialidad';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RegistroPendienteDialogComponent } from '../../shared/registroPendiente-dialog';

@Component({
  selector: 'app-registrate',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatDialogModule],
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.scss']
})
export class RegistrateComponent implements OnInit, OnDestroy {

  rolSeleccionado: string = '';
  registrarseForm: FormGroup;
  subs = new Subscription;
  especialidades: Especialidad[];
  errorMessage: string;
 
  constructor( private fb: FormBuilder, private dialog:MatDialog, private rxService: RxDigitalService, private router: Router) {}
 
  ngOnInit(): void {
    this.registrarseForm = this.fb.group({
      dni: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      roleId: ['', Validators.required],
      registration: [''],
      especialidad: ['']
    });

    this.subs.add(this.rxService.getSpecialities().subscribe({
      next: (res) => {
        this.especialidades = res;
      },
      error:(err) => {
        this.errorMessage = err.error;
      }
    }));
  }
 
   
  onSubmit() {
    let user = new Register();
    user = {
      ...this.registrarseForm.value,
      roleId: parseInt(this.registrarseForm.value.roleId, 10),
      registration: this.registrarseForm.value.roleId === '1' ? null : this.registrarseForm.value.registration,
      especialidadId: parseInt(this.registrarseForm.value.especialidad, 10),
      dni: parseInt(this.registrarseForm.value.dni, 10)
    }

    this.subs.add(this.rxService.register(user).subscribe({
      next: (res) => {
        const dialogRef = this.dialog.open(RegistroPendienteDialogComponent, {
          width: '600px',
          height:'300px'
        });
    
        dialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['/login']);
        });
      },
      error:(err) => {
        this.errorMessage = err.error;
      }
    }));
  }

   ngOnDestroy(): void {
     this.subs.unsubscribe();
   }

   volver(){
    this.router.navigate(['/login']);
   }
}

 


