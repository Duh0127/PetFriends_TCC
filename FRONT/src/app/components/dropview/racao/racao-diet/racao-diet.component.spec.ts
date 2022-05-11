import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaoDietComponent } from './racao-diet.component';

describe('RacaoDietComponent', () => {
  let component: RacaoDietComponent;
  let fixture: ComponentFixture<RacaoDietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacaoDietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaoDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
