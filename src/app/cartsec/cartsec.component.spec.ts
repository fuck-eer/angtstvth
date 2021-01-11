import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartsecComponent } from './cartsec.component';

describe('CartsecComponent', () => {
  let component: CartsecComponent;
  let fixture: ComponentFixture<CartsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartsecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
