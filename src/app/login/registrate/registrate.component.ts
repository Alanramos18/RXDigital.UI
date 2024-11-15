import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RxDigitalService } from '../../services/rx-digital.service';
import { Subscription } from 'rxjs';
import { Register } from '../../models/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrate',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.scss']
})
export class RegistrateComponent implements OnInit, OnDestroy {

  rolSeleccionado: string = '';
  registrarseForm: FormGroup;
  subs = new Subscription;
 
  constructor( private fb: FormBuilder, private rxService: RxDigitalService, private router: Router) {}
 
  ngOnInit(): void {
    this.registrarseForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      roleId: ['', Validators.required],
      registration: ['']
    });
  }
 
   
  onSubmit() {
    let user = new Register();
    debugger;
    user = {
      ...this.registrarseForm.value,
      roleId: parseInt(this.registrarseForm.value.roleId, 10),
      registration: this.registrarseForm.value.roleId === '1' ? null : this.registrarseForm.value.registration
    }

    this.subs.add(this.rxService.register(user).subscribe({
      next: (res) => {
        this.router.navigate(['/login']);
      },
      error:(err) => {
        console.log(err);
      }
    }));
  }



   
   ngOnDestroy(): void {
     this.subs.unsubscribe();
   }
}

 


