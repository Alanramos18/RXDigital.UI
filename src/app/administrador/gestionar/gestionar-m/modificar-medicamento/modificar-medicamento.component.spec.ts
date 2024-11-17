import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarMedicamentoComponent } from './modificar-medicamento.component';
import { FormsModule } from '@angular/forms';

describe('ModificarMedicamentoComponent', () => {
  let component: ModificarMedicamentoComponent;
  let fixture: ComponentFixture<ModificarMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarMedicamentoComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });


});
