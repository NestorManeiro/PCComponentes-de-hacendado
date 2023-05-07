import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PproductComponent } from './pproduct.component';

describe('PproductComponent', () => {
  let component: PproductComponent;
  let fixture: ComponentFixture<PproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
