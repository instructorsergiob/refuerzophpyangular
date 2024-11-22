import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendizFichaComponent } from './aprendiz-ficha.component';

describe('AprendizFichaComponent', () => {
  let component: AprendizFichaComponent;
  let fixture: ComponentFixture<AprendizFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AprendizFichaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprendizFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
