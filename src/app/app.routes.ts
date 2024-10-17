import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VerRecetasPacienteComponent } from './ver-recetas-paciente/ver-recetas-paciente.component';
import { BuscarPacienteComponent } from './buscar-paciente/buscar-paciente.component';
import { EmitirRecetaComponent } from './emitir-receta/emitir-receta.component';
import { CancelarRecetaComponent } from './cancelar-receta/cancelar-receta.component';
import { EmisionCorrectaComponent } from './emision-correcta/emision-correcta.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path:'ver-recetas-paciente', component: VerRecetasPacienteComponent},
    { path:'buscar-paciente', component:BuscarPacienteComponent},
    { path:'emitir-receta', component:EmitirRecetaComponent},
    { path: 'cancelar-receta', component: CancelarRecetaComponent },
    { path: 'emision-correcta', component: EmisionCorrectaComponent }
];

