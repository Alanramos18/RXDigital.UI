import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMedicosComponent } from './top-medicos.component';

describe('TopMedicosComponent', () => {
  let component: TopMedicosComponent;
  let fixture: ComponentFixture<TopMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopMedicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
