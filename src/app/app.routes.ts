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
import { ModificarPacienteComponent } from './Medico/Paciente/modificar-paciente/modificar-paciente.component';

import { GestionarMedicamentosComponent } from './administrador/gestionar/gestionar-m/gestionar-medicamentos/gestionar-medicamentos.component';

import { ModificarMedicamentoComponent } from './administrador/gestionar/gestionar-m/modificar-medicamento/modificar-medicamento.component';
import { AgregarPacienteComponent } from './Medico/Paciente/agregar-paciente/agregar-paciente.component';

import { BuscarRecetaComponent } from './farmaceutico/buscar-receta/buscar-receta.component';
import { RevisarRecetaComponent } from './farmaceutico/revisar-receta/revisar-receta.component';
import { MotivoRechazoComponent } from './farmaceutico/motivo-rechazo/motivo-rechazo.component';
import { ModificarRecetaComponent } from './Medico/Receta/modificar-receta/modificar-receta.component';
import { RegistrateComponent } from './login/registrate/registrate.component';
import { InicioGestionarComponent } from './administrador/gestionar/inicio-gestionar/inicio-gestionar.component';
import { GestionarUsuariosComponent } from './administrador/gestionar/gestionar-u/gestionar-usuarios/gestionar-usuarios.component';
import { ExportarInformeComponent } from './administrador/consultar/exportar-informe/exportar-informe.component';
import { InicioConsultarComponent } from './administrador/consultar/inicio-consultar/inicio-consultar.component';
import { InicioAdminComponent } from './administrador/inicio-admin/inicio-admin.component';
import { RecetasFechaComponent } from './administrador/consultar/recetas-fecha/recetas-fecha.component';
import { TopMedicamentosComponent } from './administrador/consultar/top-medicamentos/top-medicamentos.component';
import { TopMedicosComponent } from './administrador/consultar/top-medicos/top-medicos.component';
import { BuscarMedicamentoComponent } from './administrador/gestionar/gestionar-m/buscar-medicamento/buscar-medicamento.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'ver-recetas-paciente/:id', component: VerRecetasPacienteComponent}, //, canActivate: [authGuard] },
    { path: 'ver-detalle-paciente/:id', component: VerDetallePacienteComponent}, //, canActivate: [authGuard] },
    { path: 'modificar-paciente/:id', component: ModificarPacienteComponent},
    { path: 'buscar-paciente', component:BuscarPacienteComponent}, //, canActivate: [authGuard] },
    { path: 'emitir-receta/:id', component:EmitirRecetaComponent}, //canActivate: [authGuard] },
    { path: 'cancelar-receta', component: CancelarRecetaComponent},// canActivate: [authGuard] },
    { path: 'emision-correcta', component: EmisionCorrectaComponent},// canActivate: [authGuard] },
    { path: 'eliminar-receta', component: EliminarRecetaComponent},// canActivate: [authGuard] },
    { path: 'ver-detalle-receta', component: VerDetalleRecetaComponent},// canActivate: [authGuard] },
    { path: 'gestionar-medicamentos', component: GestionarMedicamentosComponent /*, canActivate: [authGuard]*/ },
    { path: 'buscar-medicamento',component:BuscarMedicamentoComponent},
    
    { path: 'modificar-medicamento', component: ModificarMedicamentoComponent /*, canActivate: [authGuard]*/ },
    { path: 'buscar-receta', component: BuscarRecetaComponent}, /*, canActivate: [authGuard]*/
    { path: 'revisar-receta/:id', component: RevisarRecetaComponent}, /*, canActivate: [authGuard]*/
    { path: 'agregar-paciente', component: AgregarPacienteComponent /*, canActivate: [authGuard]*/ },
    { path: 'modificar-receta', component: ModificarRecetaComponent/*, canActivate: [authGuard]*/ },
    { path: 'registrate', component: RegistrateComponent },
    { path: 'inicio-gestionar', component: InicioGestionarComponent/*, canActivate: [authGuard]*/ },
    { path: 'gestionar-usuarios', component: GestionarUsuariosComponent/*, canActivate: [authGuard]*/ },
    { path: 'exportar-informe', component: ExportarInformeComponent/*, canActivate: [authGuard]*/ },
    { path: 'inicio-consultar', component: InicioConsultarComponent/*, canActivate: [authGuard]*/ },
    { path: 'inicio-admin', component: InicioAdminComponent/*, canActivate: [authGuard]*/ },
    { path: 'recetas-fecha',component: RecetasFechaComponent},
    { path: 'top-medicamentos', component: TopMedicamentosComponent/*, canActivate: [authGuard]*/ },
    { path: 'top-medicos', component: TopMedicosComponent/*, canActivate: [authGuard]*/ },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' },
    //
    
];  

