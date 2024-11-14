import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ExportarInformeComponent } from './exportar-informe.component';

describe('ExportarComponent', () => {
  let component: ExportarInformeComponent;
  let fixture: ComponentFixture<ExportarInformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExportarInformeComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportarInformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default selected format as empty', () => {
    expect(component.selectedFormat).toBe('');
  });

  it('should display formats in the dropdown', () => {
    const compiled = fixture.nativeElement;
    const options = compiled.querySelectorAll('select option');
    expect(options.length).toBe(3);
    expect(options[0].textContent).toContain('PDF');
    expect(options[1].textContent).toContain('Excel');
    expect(options[2].textContent).toContain('CSV');
  });

  it('should set selected format and call exportar on accept button click', () => {
    spyOn(component, 'exportar');
    component.selectedFormat = 'PDF';
    fixture.detectChanges();

    const acceptButton = fixture.nativeElement.querySelector('.accept-btn');
    acceptButton.click();

    expect(component.exportar).toHaveBeenCalled();
  });

  it('should reset selected format on cancel button click', () => {
    component.selectedFormat = 'Excel';
    const cancelButton = fixture.nativeElement.querySelector('.cancel-btn');
    cancelButton.click();
    expect(component.selectedFormat).toBe('');
  });
});
