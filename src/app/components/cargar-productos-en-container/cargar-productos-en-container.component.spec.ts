import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarProductosEnContainerComponent } from './cargar-productos-en-container.component';

describe('CargarProductosEnContainerComponent', () => {
  let component: CargarProductosEnContainerComponent;
  let fixture: ComponentFixture<CargarProductosEnContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarProductosEnContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarProductosEnContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
