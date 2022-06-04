import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaoUmidaComponent } from './racao-umida.component';

describe('RacaoUmidaComponent', () => {
  let component: RacaoUmidaComponent;
  let fixture: ComponentFixture<RacaoUmidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacaoUmidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaoUmidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
