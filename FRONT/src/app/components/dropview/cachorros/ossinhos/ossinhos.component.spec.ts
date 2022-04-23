import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OssinhosComponent } from './ossinhos.component';

describe('OssinhosComponent', () => {
  let component: OssinhosComponent;
  let fixture: ComponentFixture<OssinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OssinhosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OssinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
