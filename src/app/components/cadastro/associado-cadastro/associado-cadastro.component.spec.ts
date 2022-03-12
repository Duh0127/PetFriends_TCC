import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociadoCadastroComponent } from './associado-cadastro.component';

describe('AssociadoCadastroComponent', () => {
  let component: AssociadoCadastroComponent;
  let fixture: ComponentFixture<AssociadoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociadoCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociadoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
