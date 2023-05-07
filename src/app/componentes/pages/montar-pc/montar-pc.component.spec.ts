import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontarPcComponent } from './montar-pc.component';

describe('MontarPcComponent', () => {
  let component: MontarPcComponent;
  let fixture: ComponentFixture<MontarPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontarPcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontarPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
