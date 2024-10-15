import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BuscarPacienteComponent } from './buscar-paciente/buscar-paciente.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'buscar-paciente', component: BuscarPacienteComponent }, // Define la ruta
];
