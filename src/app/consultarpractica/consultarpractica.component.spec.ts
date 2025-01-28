import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarpracticaComponent } from './consultarpractica.component';

describe('ConsultarpracticaComponent', () => {
  let component: ConsultarpracticaComponent;
  let fixture: ComponentFixture<ConsultarpracticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarpracticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarpracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
