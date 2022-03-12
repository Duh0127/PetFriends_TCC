import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociadoLoginComponent } from './associado-login.component';

describe('AssociadoLoginComponent', () => {
  let component: AssociadoLoginComponent;
  let fixture: ComponentFixture<AssociadoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociadoLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociadoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
