import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleTypewriterComponent } from './multiple-typewriter.component';

describe('MultipleTypewriterComponent', () => {
  let component: MultipleTypewriterComponent;
  let fixture: ComponentFixture<MultipleTypewriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleTypewriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleTypewriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
