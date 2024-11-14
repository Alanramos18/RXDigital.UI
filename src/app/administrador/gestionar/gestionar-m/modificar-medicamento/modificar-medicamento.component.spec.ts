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

  it('debería resetear los campos al cancelar', () => {
    component.medicamento = {
      nombre: 'Ibuprofeno',
      marca: 'Genérico',
      formaFarmaceutica: 'Tableta',
      dosis: '200mg',
      loteFabricacion: '12345',
      fechaCaducidad: '2025-12-31'
    };
    component.cancelarCambios();
    expect(component.medicamento.nombre).toBe('');
  });

  it('debería guardar los cambios', () => {
    spyOn(console, 'log');
    component.guardarCambios();
    expect(console.log).toHaveBeenCalledWith('Cambios guardados:', component.medicamento);
  });
});
