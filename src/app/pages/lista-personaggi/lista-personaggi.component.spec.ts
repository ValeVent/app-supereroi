import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPersonaggiComponent } from './lista-personaggi.component';

describe('ListaPersonaggiComponent', () => {
  let component: ListaPersonaggiComponent;
  let fixture: ComponentFixture<ListaPersonaggiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaPersonaggiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPersonaggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
