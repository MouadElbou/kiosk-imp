import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanningpageComponent } from './scanningpage.component';

describe('ScanningpageComponent', () => {
  let component: ScanningpageComponent;
  let fixture: ComponentFixture<ScanningpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScanningpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanningpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
