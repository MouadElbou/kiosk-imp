import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanningPreviewComponent } from './scanning-preview.component';

describe('ScanningPreviewComponent', () => {
  let component: ScanningPreviewComponent;
  let fixture: ComponentFixture<ScanningPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScanningPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanningPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
