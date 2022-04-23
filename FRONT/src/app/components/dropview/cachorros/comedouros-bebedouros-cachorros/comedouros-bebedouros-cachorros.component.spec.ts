import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedourosBebedourosCachorrosComponent } from './comedouros-bebedouros-cachorros.component';

describe('ComedourosBebedourosCachorrosComponent', () => {
  let component: ComedourosBebedourosCachorrosComponent;
  let fixture: ComponentFixture<ComedourosBebedourosCachorrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComedourosBebedourosCachorrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedourosBebedourosCachorrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
