import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMedicamentoComponent } from './agregar-medicamento.component';

describe('AgregarMedicamentoComponent', () => {
  let component: AgregarMedicamentoComponent;
  let fixture: ComponentFixture<AgregarMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarMedicamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
