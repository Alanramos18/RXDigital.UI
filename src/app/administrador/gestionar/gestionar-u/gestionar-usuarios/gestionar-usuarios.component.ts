import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { EncabezadoComponent } from '../../../../shared/encabezado/encabezado.component';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from '../../../../models/usuario';
import { RxDigitalService } from '../../../../services/rx-digital.service';

@Component({
  selector: 'app-gestionar-usuarios',
  standalone: true,
  imports: [CommonModule, EncabezadoComponent],
  templateUrl: './gestionar-usuarios.component.html',
  styleUrl: './gestionar-usuarios.component.scss'
})
export class GestionarUsuariosComponent implements OnInit, OnDestroy{
  subs = new Subscription;
  usuariosPendientes: Usuario[] = [];

  constructor(private router: Router, private rxService: RxDigitalService) {}

  ngOnInit(): void {
    this.subs.add(this.rxService.getUsersForAdmin().subscribe({
      next: (res) => {
        this.usuariosPendientes = res;
      },
      error:(err) => {
        console.log(err);
      }
    }));
  }

  revisarUsuario(userId: string, isApproved: boolean) {
    // Aquí va la lógica para aprobar al usuario
    this.subs.add(this.rxService.reviewUsers(userId, isApproved).subscribe({
      next: (res) => {
        if (isApproved) {
          alert(`Usuario aprobado!.`);
        } else {
          alert(`Usuario rechazado!.`);
        }
        // Luego eliminar el usuario de la lista o actualizar el estado
        this.usuariosPendientes = this.usuariosPendientes.filter(u => u.id !== userId);
      },
      error:(err) => {
        console.log(err);
      }
    }));
  }

  volver(){
    this.router.navigate(['/inicio-gestionar']);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
