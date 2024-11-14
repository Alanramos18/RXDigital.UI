import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-gestionar',
  standalone: true,
  imports: [],
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
}
