import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMedicamentosComponent } from './top-medicamentos.component';

describe('TopMedicamentosComponent', () => {
  let component: TopMedicamentosComponent;
  let fixture: ComponentFixture<TopMedicamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopMedicamentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
