import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaptalksComponent } from './maptalks.component';

describe('MaptalksComponent', () => {
  let component: MaptalksComponent;
  let fixture: ComponentFixture<MaptalksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaptalksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaptalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
