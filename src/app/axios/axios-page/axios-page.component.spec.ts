import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiosPageComponent } from './axios-page.component';

describe('AxiosPageComponent', () => {
  let component: AxiosPageComponent;
  let fixture: ComponentFixture<AxiosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
