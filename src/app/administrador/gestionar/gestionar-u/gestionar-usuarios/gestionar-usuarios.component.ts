import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { EncabezadoComponent } from '../../../../shared/encabezado/encabezado.component';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from '../../../../models/usuario';
import { RxDigitalService } from '../../../../services/rx-digital.service';
import { MatDialog } from '@angular/material/dialog';
import { AceptarUsuarioDialogComponent } from '../../../../shared/aceptarUsuario';
import { RechazarUsuarioDialogComponent } from '../../../../shared/rechazarUsuario';

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
  loading: boolean = false;

  constructor(private router: Router, private dialog:MatDialog, private rxService: RxDigitalService) {}

  ngOnInit(): void {
    this.loading = true;
    this.subs.add(this.rxService.getUsersForAdmin().subscribe({
      next: (res) => {
        this.usuariosPendientes = res;
        this.loading = false;
      },
      error:(err) => {
        console.log(err);
        this.loading = false;
      }
    }));
  }

  revisarUsuario(userId: string, isApproved: boolean) {
    // Aquí va la lógica para aprobar al usuario
    this.loading = true;
    this.subs.add(this.rxService.reviewUsers(userId, isApproved).subscribe({
      next: (res) => {
        if (isApproved) {
          const dialogRef = this.dialog.open(AceptarUsuarioDialogComponent, {
            width: '600px',
            height:'300px'
          });
        } else {
          const dialogRef = this.dialog.open(RechazarUsuarioDialogComponent, {
            width: '600px',
            height:'300px'
          });
        }
        // Luego eliminar el usuario de la lista o actualizar el estado
        this.usuariosPendientes = this.usuariosPendientes.filter(u => u.id !== userId);
        this.loading = false;
      },
      error:(err) => {
        console.log(err);
        this.loading = false;
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
