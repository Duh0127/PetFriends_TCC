import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreiaComponent } from './areia.component';

describe('AreiaComponent', () => {
  let component: AreiaComponent;
  let fixture: ComponentFixture<AreiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
