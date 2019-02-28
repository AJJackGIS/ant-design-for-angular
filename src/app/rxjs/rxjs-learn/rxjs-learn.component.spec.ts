import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsLearnComponent } from './rxjs-learn.component';

describe('RxjsLearnComponent', () => {
  let component: RxjsLearnComponent;
  let fixture: ComponentFixture<RxjsLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
