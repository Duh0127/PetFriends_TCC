import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigieneGatosComponent } from './higiene-gatos.component';

describe('HigieneGatosComponent', () => {
  let component: HigieneGatosComponent;
  let fixture: ComponentFixture<HigieneGatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HigieneGatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HigieneGatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
