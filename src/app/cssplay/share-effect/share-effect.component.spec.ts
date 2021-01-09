import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareEffectComponent } from './share-effect.component';

describe('ShareEffectComponent', () => {
  let component: ShareEffectComponent;
  let fixture: ComponentFixture<ShareEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
