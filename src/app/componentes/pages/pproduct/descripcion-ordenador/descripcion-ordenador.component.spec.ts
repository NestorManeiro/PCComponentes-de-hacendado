import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionOrdenadorComponent } from './descripcion-ordenador.component';

describe('DescripcionOrdenadorComponent', () => {
  let component: DescripcionOrdenadorComponent;
  let fixture: ComponentFixture<DescripcionOrdenadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionOrdenadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescripcionOrdenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
