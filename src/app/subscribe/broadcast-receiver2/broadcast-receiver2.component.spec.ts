import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastReceiver2Component } from './broadcast-receiver2.component';

describe('BroadcastReceiver2Component', () => {
  let component: BroadcastReceiver2Component;
  let fixture: ComponentFixture<BroadcastReceiver2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadcastReceiver2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastReceiver2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
