import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasFechaComponent } from './recetas-fecha.component';

describe('RecetasFechaComponent', () => {
  let component: RecetasFechaComponent;
  let fixture: ComponentFixture<RecetasFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetasFechaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecetasFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
