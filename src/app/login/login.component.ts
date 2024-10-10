import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  login() {
    console.log("Holis que onda");
    // 1° validar validacion

    // 2° llamar al login backend

    // 3° validar el llamado
    //if ok entonces navigate a la prox pantalla dependiendo el rol
    //if mal entonces mostrar error
  }
}
