import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePlanetComponent } from './delete-planet.component';

describe('DeletePlanetComponent', () => {
  let component: DeletePlanetComponent;
  let fixture: ComponentFixture<DeletePlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
