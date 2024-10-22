import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RxDigitalService } from '../services/rx-digital.service';
import { Router } from '@angular/router';
import { Roles } from '../models/roles.enums';
import { jwtDecode } from 'jwt-decode';

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
    this.rxService.login(this.email, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('token', res);

        const decodedToken: any = jwtDecode(res);

        localStorage.setItem('roleId', decodedToken['RoleId']);

        switch(Number(decodedToken['RoleId'])) {
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
