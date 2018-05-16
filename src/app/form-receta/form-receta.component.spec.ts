import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecetaComponent } from './form-receta.component';

describe('FormRecetaComponent', () => {
  let component: FormRecetaComponent;
  let fixture: ComponentFixture<FormRecetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRecetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
