import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarPerfilAssociadoComponent } from './alterar-perfil-associado.component';

describe('AlterarPerfilAssociadoComponent', () => {
  let component: AlterarPerfilAssociadoComponent;
  let fixture: ComponentFixture<AlterarPerfilAssociadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarPerfilAssociadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarPerfilAssociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
