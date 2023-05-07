import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasVinculadasComponent } from './tarjetas-vinculadas.component';

describe('TarjetasVinculadasComponent', () => {
  let component: TarjetasVinculadasComponent;
  let fixture: ComponentFixture<TarjetasVinculadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasVinculadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetasVinculadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
