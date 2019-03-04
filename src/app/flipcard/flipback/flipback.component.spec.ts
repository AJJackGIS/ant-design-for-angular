import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipbackComponent } from './flipback.component';

describe('FlipbackComponent', () => {
  let component: FlipbackComponent;
  let fixture: ComponentFixture<FlipbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
