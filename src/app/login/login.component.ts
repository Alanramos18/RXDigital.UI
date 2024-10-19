import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RxDigitalService } from '../services/rx-digital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = "";
  password: string = "";

  constructor(private rxService: RxDigitalService, private router: Router) {}

  login() {
    // 1° validar validacion

    // 2° llamar al login backend
    this.rxService.login(this.email, this.password).subscribe({
      next: (res) => {
        console.log(res);
        if (res.Role === 2)
        {
          this.router.navigate(['/buscar-paciente']);
        }
      },
      error: (err) => {
        console.log('Hubo un error. Por favor intenta mas tarde')
      }
    });
  }
}
