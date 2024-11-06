import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VerRecetasPacienteComponent } from './Medico/Paciente/ver-recetas-paciente/ver-recetas-paciente.component';
import { BuscarPacienteComponent } from './Medico/Paciente/buscar-paciente/buscar-paciente.component';
import { EmitirRecetaComponent } from './Medico/Receta/emitir-receta/emitir-receta.component';
import { CancelarRecetaComponent } from './Medico/Receta/cancelar-receta/cancelar-receta.component';
import { EmisionCorrectaComponent } from './Medico/Receta/emision-correcta/emision-correcta.component';
//import { authGuard } from './guard/auth.guard';
import { VerDetallePacienteComponent } from './Medico/Paciente/ver-detalle-paciente/ver-detalle-paciente.component';
import { EliminarRecetaComponent } from './Medico/Receta/eliminar-receta/eliminar-receta.component';
import { VerDetalleRecetaComponent } from './Medico/Receta/ver-detalle-receta/ver-detalle-receta.component';
import { ModificarPacienteComponent } from './modificar-paciente/modificar-paciente.component';

import { GestionarMedicamentosComponent } from './administrador/gestionar-medicamentos/gestionar-medicamentos.component';
import { ModificarMedicamentoComponent } from './administrador/modificar-medicamento/modificar-medicamento.component';
import { AgregarPacienteComponent } from './Medico/Paciente/agregar-paciente/agregar-paciente.component';

import { BuscarRecetaComponent } from './farmaceutico/buscar-receta/buscar-receta.component';
import { RevisarRecetaComponent } from './farmaceutico/revisar-receta/revisar-receta.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path:'ver-recetas-paciente', component: VerRecetasPacienteComponent}, //, canActivate: [authGuard] },
    { path: 'ver-detalle-paciente', component: VerDetallePacienteComponent}, //, canActivate: [authGuard] },
    { path:'modificar-paciente', component:ModificarPacienteComponent},
    { path:'buscar-paciente', component:BuscarPacienteComponent}, //, canActivate: [authGuard] },
    { path:'emitir-receta', component:EmitirRecetaComponent}, //canActivate: [authGuard] },
    { path: 'cancelar-receta', component: CancelarRecetaComponent},// canActivate: [authGuard] },
    { path: 'emision-correcta', component: EmisionCorrectaComponent},// canActivate: [authGuard] },
    { path: 'eliminar-receta', component: EliminarRecetaComponent},// canActivate: [authGuard] },
    { path: 'ver-detalle-receta', component: VerDetalleRecetaComponent},// canActivate: [authGuard] },
    { path: 'gestionar-medicamentos', component: GestionarMedicamentosComponent /*, canActivate: [authGuard]*/ },
    { path: 'modifcar-medicamento', component: ModificarMedicamentoComponent /*, canActivate: [authGuard]*/ },
    { path: 'buscar-receta', component: BuscarRecetaComponent}, /*, canActivate: [authGuard]*/
    { path: 'revisar-receta', component: RevisarRecetaComponent}, /*, canActivate: [authGuard]*/
    { path: 'agregar-paciente', component: AgregarPacienteComponent /*, canActivate: [authGuard]*/ },

    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' },
    //
    
];  

