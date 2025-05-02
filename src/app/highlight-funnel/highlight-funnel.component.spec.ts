import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightFunnelComponent } from './highlight-funnel.component';

describe('HighlightFunnelComponent', () => {
  let component: HighlightFunnelComponent;
  let fixture: ComponentFixture<HighlightFunnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightFunnelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightFunnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
