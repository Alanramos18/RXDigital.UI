import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MedicService } from '../services/medic.service';

@Component({
  selector: 'app-emision-correcta',
  standalone: true,
  imports: [],
  templateUrl: './emision-correcta.component.html',
  styleUrl: './emision-correcta.component.scss'
})
export class EmisionCorrectaComponent {
  doctorName: string;

  constructor(private router: Router, private medicService: MedicService) {
  }

  ngOnInit(): void {
    this.doctorName = this.medicService.getMedicFullName();
  }
  goHome() {
    // Redirige a la pantalla de inicio o donde sea necesario
    this.router.navigate(['/ver-recetas-paciente']);
  }
}
