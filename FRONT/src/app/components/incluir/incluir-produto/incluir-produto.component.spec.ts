import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirProdutoComponent } from './incluir-produto.component';

describe('IncluirProdutoComponent', () => {
  let component: IncluirProdutoComponent;
  let fixture: ComponentFixture<IncluirProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
