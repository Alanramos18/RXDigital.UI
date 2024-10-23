import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VerRecetasPacienteComponent } from './ver-recetas-paciente/ver-recetas-paciente.component';
import { BuscarPacienteComponent } from './buscar-paciente/buscar-paciente.component';
import { EmitirRecetaComponent } from './emitir-receta/emitir-receta.component';
import { CancelarRecetaComponent } from './cancelar-receta/cancelar-receta.component';
import { EmisionCorrectaComponent } from './emision-correcta/emision-correcta.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path:'ver-recetas-paciente', component: VerRecetasPacienteComponent, canActivate: [authGuard] },
    { path:'buscar-paciente', component:BuscarPacienteComponent, canActivate: [authGuard] },
    { path:'emitir-receta', component:EmitirRecetaComponent, canActivate: [authGuard] },
    { path: 'cancelar-receta', component: CancelarRecetaComponent, canActivate: [authGuard] },
    { path: 'emision-correcta', component: EmisionCorrectaComponent, canActivate: [authGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];

