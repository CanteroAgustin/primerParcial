import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerUpdateComponent } from './container-update.component';

describe('ContainerUpdateComponent', () => {
  let component: ContainerUpdateComponent;
  let fixture: ComponentFixture<ContainerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
