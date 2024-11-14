import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-source-dialog',
  standalone: true,
  template: `
    <div class="source-dialog-container">
      <h2>Select Source</h2>
      <button mat-raised-button color="accent" (click)="selectSource('phone')">
        <mat-icon>smartphone</mat-icon> Phone
      </button>
      <button mat-raised-button color="accent" (click)="selectSource('usb')">
        <mat-icon>usb</mat-icon> USB
      </button>
    </div>
  `,
  styles: [
    `
      .source-dialog-container {
        text-align: center;
      }
      button {
        margin: 10px;
      }
    `,
  ],
  imports: [MatButtonModule, CommonModule,MatIconModule],
})
export class SourceDialogComponent {
  constructor(private dialogRef: MatDialogRef<SourceDialogComponent>) {}

  selectSource(source: string) {
    this.dialogRef.close(source);
  }
}
