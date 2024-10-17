import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisionCorrectaComponent } from './emision-correcta.component';

describe('EmisionCorrectaComponent', () => {
  let component: EmisionCorrectaComponent;
  let fixture: ComponentFixture<EmisionCorrectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmisionCorrectaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmisionCorrectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
