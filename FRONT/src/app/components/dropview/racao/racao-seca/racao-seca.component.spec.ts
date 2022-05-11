import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaoSecaComponent } from './racao-seca.component';

describe('RacaoSecaComponent', () => {
  let component: RacaoSecaComponent;
  let fixture: ComponentFixture<RacaoSecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacaoSecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaoSecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
