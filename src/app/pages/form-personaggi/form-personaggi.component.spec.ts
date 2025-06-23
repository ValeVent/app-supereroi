import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonaggiComponent } from './form-personaggi.component';

describe('FormPersonaggiComponent', () => {
  let component: FormPersonaggiComponent;
  let fixture: ComponentFixture<FormPersonaggiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormPersonaggiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPersonaggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
