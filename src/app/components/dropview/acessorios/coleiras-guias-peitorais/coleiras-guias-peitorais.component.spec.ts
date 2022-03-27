import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeirasGuiasPeitoraisComponent } from './coleiras-guias-peitorais.component';

describe('ColeirasGuiasPeitoraisComponent', () => {
  let component: ColeirasGuiasPeitoraisComponent;
  let fixture: ComponentFixture<ColeirasGuiasPeitoraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColeirasGuiasPeitoraisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeirasGuiasPeitoraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
