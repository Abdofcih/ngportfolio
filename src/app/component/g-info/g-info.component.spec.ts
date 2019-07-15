import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GInfoComponent } from './g-info.component';

describe('GInfoComponent', () => {
  let component: GInfoComponent;
  let fixture: ComponentFixture<GInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
