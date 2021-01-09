import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssplayComponent } from './cssplay.component';

describe('CssplayComponent', () => {
  let component: CssplayComponent;
  let fixture: ComponentFixture<CssplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
