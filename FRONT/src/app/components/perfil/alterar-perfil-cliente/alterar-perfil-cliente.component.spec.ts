import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarPerfilClienteComponent } from './alterar-perfil-cliente.component';

describe('AlterarPerfilClienteComponent', () => {
  let component: AlterarPerfilClienteComponent;
  let fixture: ComponentFixture<AlterarPerfilClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarPerfilClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarPerfilClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
