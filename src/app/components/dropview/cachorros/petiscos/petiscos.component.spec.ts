import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetiscosComponent } from './petiscos.component';

describe('PetiscosComponent', () => {
  let component: PetiscosComponent;
  let fixture: ComponentFixture<PetiscosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetiscosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
