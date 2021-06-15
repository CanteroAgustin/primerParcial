import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAbmComponent } from './container-abm.component';

describe('ContainerAbmComponent', () => {
  let component: ContainerAbmComponent;
  let fixture: ComponentFixture<ContainerAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
