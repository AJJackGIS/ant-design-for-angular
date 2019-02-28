import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilddemoComponent } from './childdemo.component';

describe('ChilddemoComponent', () => {
  let component: ChilddemoComponent;
  let fixture: ComponentFixture<ChilddemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilddemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilddemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
