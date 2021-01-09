import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverShadowComponent } from './hover-shadow.component';

describe('HoverShadowComponent', () => {
  let component: HoverShadowComponent;
  let fixture: ComponentFixture<HoverShadowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverShadowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
