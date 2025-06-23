import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioPersonaggiComponent } from './dettaglio-personaggi.component';

describe('DettaglioPersonaggiComponent', () => {
  let component: DettaglioPersonaggiComponent;
  let fixture: ComponentFixture<DettaglioPersonaggiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DettaglioPersonaggiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioPersonaggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
