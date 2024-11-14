import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrate',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.scss']
})
export class RegistrateComponent implements OnInit {

  rolSeleccionado: string = '';
  registrarseForm: FormGroup;
 
   constructor( private fb: FormBuilder){}
 
 
   ngOnInit(): void {
    this.registrarseForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rol: ['', Validators.required],
      numMatricula: ['']
    });

    
    
    }
 
  
 
 
   onRegister() {}

   
   onSubmit() {}

}

 


