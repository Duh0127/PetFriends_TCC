import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarComponent } from './alterar.component';

describe('AlterarComponent', () => {
  let component: AlterarComponent;
  let fixture: ComponentFixture<AlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
