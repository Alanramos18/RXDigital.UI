import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMedicamentoComponent } from './buscar-medicamento.component';

describe('BuscarMedicamentoComponent', () => {
  let component: BuscarMedicamentoComponent;
  let fixture: ComponentFixture<BuscarMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarMedicamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
