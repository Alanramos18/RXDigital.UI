import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';

@Component({
  selector: 'app-inicio-gestionar',
  standalone: true,
  imports: [EncabezadoComponent],
  templateUrl: './inicio-gestionar.component.html',
  styleUrl: './inicio-gestionar.component.scss'
})
export class InicioGestionarComponent {
  constructor(private router: Router) {}

  gestionarUsuarios() {
    this.router.navigate(['/gestionar-usuarios']);
  }

  gestionarMedicamentos() {
    this.router.navigate(['/gestionar-medicamentos']);
  }

  volver(){
    this.router.navigate(['/inicio-admin']);
  }
}
