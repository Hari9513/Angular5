import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBoxesComponent } from './color-boxes.component';

describe('ColorBoxesComponent', () => {
  let component: ColorBoxesComponent;
  let fixture: ComponentFixture<ColorBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
