import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedefinicaoComponent } from './redefinicao.component';

describe('RedefinicaoComponent', () => {
  let component: RedefinicaoComponent;
  let fixture: ComponentFixture<RedefinicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedefinicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedefinicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
