import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EncabezadoComponent } from '../../../../shared/encabezado/encabezado.component';
import { Router } from '@angular/router';

interface Usuario {
  nombre: string;
  apellido: string;
  dni: string;
  rol: string;
  email: string;
  contrasena: string;
  matricula?: string;
}

@Component({
  selector: 'app-gestionar-usuarios',
  standalone: true,
  imports: [CommonModule, EncabezadoComponent],
  templateUrl: './gestionar-usuarios.component.html',
  styleUrl: './gestionar-usuarios.component.scss'
})
export class GestionarUsuariosComponent {

  constructor(private router: Router) {}

  usuariosPendientes: Usuario[] = [
    { nombre: 'Juan', apellido: 'Perez', dni: '23456788', rol: '2', email: 'cuenta1@gmail.com', contrasena: 'hola123', matricula: 'MN1234' },
    { nombre: 'Maria', apellido: 'Lopez', dni: '42567832', rol: '3', email: 'cuenta2@gmail.com', contrasena: 'hola456', matricula: 'MN3455' },
    { nombre: 'Esteban', apellido: 'Quito', dni: '38238956', rol: '1', email: 'cuenta3@gmail.com', contrasena: 'hola567' },
    // Otros usuarios simulados
  ];

  aprobarUsuario(usuario: Usuario) {
    // Aquí va la lógica para aprobar al usuario
    alert(`Usuario ${usuario.nombre} aprobado.`);
    // Luego eliminar el usuario de la lista o actualizar el estado
    this.usuariosPendientes = this.usuariosPendientes.filter(u => u !== usuario);
  }

  rechazarUsuario(usuario: Usuario) {
    // Aquí va la lógica para registrar el rechazo del usuario junto con el motivo
    alert(`Usuario ${usuario.nombre} rechazado.`);
    // Luego eliminar el usuario de la lista o actualizar el estado
    this.usuariosPendientes = this.usuariosPendientes.filter(u => u !== usuario);
  }

  volver(){
    this.router.navigate(['/inicio-gestionar']);
  }
}