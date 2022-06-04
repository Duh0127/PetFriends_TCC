import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedourosBebedourosGatosComponent } from './comedouros-bebedouros-gatos.component';

describe('ComedourosBebedourosGatosComponent', () => {
  let component: ComedourosBebedourosGatosComponent;
  let fixture: ComponentFixture<ComedourosBebedourosGatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComedourosBebedourosGatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedourosBebedourosGatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
