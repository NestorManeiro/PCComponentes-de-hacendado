import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionMovilComponent } from './descripcion-movil.component';

describe('DescripcionMovilComponent', () => {
  let component: DescripcionMovilComponent;
  let fixture: ComponentFixture<DescripcionMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionMovilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescripcionMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
