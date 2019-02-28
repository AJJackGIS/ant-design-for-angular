import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastReceiverComponent } from './broadcast-receiver.component';

describe('BroadcastReceiverComponent', () => {
  let component: BroadcastReceiverComponent;
  let fixture: ComponentFixture<BroadcastReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadcastReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
