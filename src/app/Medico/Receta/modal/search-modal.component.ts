import { Component, Output, EventEmitter, inject, Inject, OnDestroy } from '@angular/core';
import { Medicamento } from '../../../models/medicamento';
import { RxDigitalService } from '../../../services/rx-digital.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrl:'./search-modal.component.scss'

})
export class SearchModalComponent implements OnDestroy {
  searchQuery: string = '';
  listaMedicamentos: Medicamento[] = []; // Cambia `any` a tu tipo específico
  subs = new Subscription;
  
  @Output() selectedMed = new EventEmitter<any>();

  constructor(private rxDigitalService: RxDigitalService,
    public dialogRef: MatDialogRef<SearchModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  searchMedicines() {
    this.subs.add(this.rxDigitalService.getMedicine(this.searchQuery).subscribe({
        next: (res) => {
          this.listaMedicamentos = res;
        },
        error: (err) => console.log(err)
      })
    )
  }

  selectItem(item: any) {
    this.dialogRef.close(item);
  }

  close() {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
