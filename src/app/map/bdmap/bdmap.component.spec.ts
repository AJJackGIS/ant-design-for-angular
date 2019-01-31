import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdmapComponent } from './bdmap.component';

describe('BdmapComponent', () => {
  let component: BdmapComponent;
  let fixture: ComponentFixture<BdmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
