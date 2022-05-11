import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoupasComponent } from './roupas.component';

describe('RoupasComponent', () => {
  let component: RoupasComponent;
  let fixture: ComponentFixture<RoupasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoupasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoupasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
