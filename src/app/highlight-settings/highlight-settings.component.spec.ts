import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightSettingsComponent } from './highlight-settings.component';

describe('HighlightSettingsComponent', () => {
  let component: HighlightSettingsComponent;
  let fixture: ComponentFixture<HighlightSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
