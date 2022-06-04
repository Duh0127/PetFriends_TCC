import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoProdutoComponent } from './descricao-produto.component';

describe('DescricaoProdutoComponent', () => {
  let component: DescricaoProdutoComponent;
  let fixture: ComponentFixture<DescricaoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescricaoProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescricaoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
