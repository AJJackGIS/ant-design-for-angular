import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastReceiverHomeComponent } from './broadcast-receiver-home.component';

describe('BroadcastReceiverHomeComponent', () => {
  let component: BroadcastReceiverHomeComponent;
  let fixture: ComponentFixture<BroadcastReceiverHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadcastReceiverHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastReceiverHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
