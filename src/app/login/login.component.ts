import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RxDigitalService } from '../services/rx-digital.service';
import { Router } from '@angular/router';
import { Roles } from '../models/roles.enums';
import { jwtDecode } from 'jwt-decode';
import { MedicService } from '../services/medic.service';

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

  constructor(private rxService: RxDigitalService, private medicService: MedicService, private router: Router) {}

  login() {
    this.rxService.login(this.email, this.password).subscribe({
      next: (res) => {

        localStorage.setItem('token', res);

        const decodedToken: any = jwtDecode(res);

        this.medicService.setRole(decodedToken['RoleId']);
        this.medicService.setUserId(decodedToken['UserId']);

        switch(Number(this.medicService.getRole())) {
          case Roles.Admin:
            this.router.navigate(['/asdasdasdas']);
            break;

          case Roles.Medico:
            this.router.navigate(['/buscar-paciente']);
            break;

          case Roles.Farmaceutico:
            this.router.navigate(['/asdadasd']);
            break;
        }
      },
      error: (err) => {
        console.log('Hubo un error. Por favor intenta mas tarde')
      }
    });
  }
}
