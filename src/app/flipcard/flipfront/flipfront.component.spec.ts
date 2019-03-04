import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipfrontComponent } from './flipfront.component';

describe('FlipfrontComponent', () => {
  let component: FlipfrontComponent;
  let fixture: ComponentFixture<FlipfrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipfrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
