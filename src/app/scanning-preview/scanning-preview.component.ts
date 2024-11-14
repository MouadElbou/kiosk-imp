import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // Optional, if using icons
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ScanProgressComponent } from '../scan-progress/scan-progress.component';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@Component({
  selector: 'app-scanning-preview',
  standalone: true,
  imports: [
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    ScanProgressComponent,
    CommonModule,PdfViewerModule
  ],
  templateUrl: './scanning-preview.component.html',
  styleUrl: './scanning-preview.component.css',
})
export class ScanningPreviewComponent {
  selectedColor: string = 'color';
  selectedResolution: string = '300dpi';
  resolutions: string[] = ['150dpi', '300dpi', '600dpi'];
  colors: string[] = ['Black & White', 'Color'];

  confirm() {
    // Handle confirmation logic
    console.log('Preview confirmed!');
  }

  pageLoaded = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.pageLoaded = true;
    }, 100); // Delay to apply transition effect
  }
}
