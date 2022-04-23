import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirServicoComponent } from './incluir-servico.component';

describe('IncluirServicoComponent', () => {
  let component: IncluirServicoComponent;
  let fixture: ComponentFixture<IncluirServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
