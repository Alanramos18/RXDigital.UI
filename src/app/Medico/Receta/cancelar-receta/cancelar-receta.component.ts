import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmitirRecetaComponent } from '../emitir-receta/emitir-receta.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancelar-receta',
  standalone: true,
  imports: [CommonModule, EmitirRecetaComponent],
  templateUrl: './cancelar-receta.component.html',
  styleUrl: './cancelar-receta.component.scss'
})
export class CancelarRecetaComponent {

  constructor(private router: Router) {}

  showConfirmation = true; // para mostrar el modal

  confirmCancel() {
    // Lógica para confirmar la cancelación de la receta
    console.log('Receta cancelada');
    this.closeModal();
    this.router.navigate(['/ver-recetas-paciente']);
  }

  closeModal() {
    this.showConfirmation = false;
    this.router.navigate(['/emitir-receta']);
  }
}
