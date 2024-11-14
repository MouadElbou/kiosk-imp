// scan-progress.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scan-progress',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `scan-progress.component.html`,
  styleUrls: [`scan-progress.component.css`],
  animations: [
    /* ... animations ... */
  ],
})
export class ScanProgressComponent implements OnInit, OnDestroy {
  progress = 0;
  isScanning = false;
  isComplete = false;
  private intervalId: any;

  constructor(private router: Router) {} // Inject Router

  ngOnInit() {
    this.startScan(); // Start the scan on initialization
  }

  startScan() {
    if (this.isScanning) return;

    this.progress = 0;
    this.isComplete = false;
    this.isScanning = true;

    this.intervalId = setInterval(() => {
      this.progress += 100 / 30; // 30 seconds total
      if (this.progress >= 100) {
        this.progress = 100;
        this.isComplete = true;
        this.isScanning = false;
        clearInterval(this.intervalId);
        this.router.navigate(['/preview']); // Navigate to the next page
      }
    }, 100);
  }

  reset() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.progress = 0;
    this.isScanning = false;
    this.isComplete = false;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
