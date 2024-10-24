import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emision-correcta',
  standalone: true,
  imports: [],
  templateUrl: './emision-correcta.component.html',
  styleUrl: './emision-correcta.component.scss'
})
export class EmisionCorrectaComponent {
  @Input() doctorName: string = 'NOMBRE DEL MÉDICO';

  constructor(private router: Router) {}

  goHome() {
    // Redirige a la pantalla de inicio o donde sea necesario
    this.router.navigate(['/ver-recetas-paciente']);
  }
}
