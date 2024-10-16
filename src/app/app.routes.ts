import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VerRecetasPacienteComponent } from './ver-recetas-paciente/ver-recetas-paciente.component';
import { BuscarPacienteComponent } from './buscar-paciente/buscar-paciente.component';
import { EmitirRecetaComponent } from './emitir-receta/emitir-receta.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path:'ver-recetas-paciente', component: VerRecetasPacienteComponent},
    { path:'buscar-paciente', component:BuscarPacienteComponent},
    { path:'emitir-receta', component:EmitirRecetaComponent}
];

