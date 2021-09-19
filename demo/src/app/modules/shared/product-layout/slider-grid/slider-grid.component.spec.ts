import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderGridComponent } from './slider-grid.component';

describe('SliderGridComponent', () => {
  let component: SliderGridComponent;
  let fixture: ComponentFixture<SliderGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
