import { Component } from '@angular/core';
import { RevisarRecetaComponent } from '../revisar-receta/revisar-receta.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-motivo-rechazo',
  standalone: true,
  imports: [RevisarRecetaComponent, FormsModule],
  templateUrl: './motivo-rechazo.component.html',
  styleUrl: './motivo-rechazo.component.scss'
})

export class MotivoRechazoComponent {
  motivoRechazo = '';
  constructor(private router: Router) {}
  confirmarRechazo() {
    if (this.motivoRechazo.trim() === '') {
      alert('Por favor, ingrese el motivo del rechazo.');
      return;
    }
    alert('La receta fue rechazada. Motivo: ' + this.motivoRechazo);
    this.motivoRechazo = '';
    
    this.router.navigate(['/buscar-receta']);
  }
}
