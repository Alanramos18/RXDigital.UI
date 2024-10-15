import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VerRecetasPacienteComponent } from './ver-recetas-paciente/ver-recetas-paciente.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path:'ver-recetas-paciente', component: VerRecetasPacienteComponent}
];

