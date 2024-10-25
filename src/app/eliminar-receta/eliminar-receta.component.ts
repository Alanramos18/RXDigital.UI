import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { VerRecetasPacienteComponent } from '../ver-recetas-paciente/ver-recetas-paciente.component';

@Component({
  selector: 'app-eliminar-receta',
  standalone: true,
  imports: [CommonModule, VerRecetasPacienteComponent],
  templateUrl: './eliminar-receta.component.html',
  styleUrl: './eliminar-receta.component.scss'
})
export class EliminarRecetaComponent {
  constructor(private router: Router) {}

  showConfirmation = true; // para mostrar el modal

  confirmCancel() {
    // Lógica para confirmar la eliminacion de la receta
    console.log('Receta eliminada');
    this.closeModal();
    /// Acá cuando sale del mensaje ya no le tiene que aparecer en
    /// la lista de recetas la receta eliminada
    this.router.navigate(['/ver-recetas-paciente']);
  }

  closeModal() {
    this.showConfirmation = false;
    this.router.navigate(['/ver-recetas-paciente']);
  }
}
