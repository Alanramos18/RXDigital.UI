import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRecetasPacienteComponent } from './ver-recetas-paciente.component';

describe('VerRecetasPacienteComponent', () => {
  let component: VerRecetasPacienteComponent;
  let fixture: ComponentFixture<VerRecetasPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerRecetasPacienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerRecetasPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
