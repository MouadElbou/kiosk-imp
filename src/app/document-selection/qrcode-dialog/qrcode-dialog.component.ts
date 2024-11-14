import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qr-code-dialog',
  standalone: true,
  template: `
    <div class="qr-code-container">
      <h2>Scan the QR Code</h2>
      <img src="assets/qrcode.png" alt="QR Code" class="qr-code-image" />
      <button mat-button (click)="closeDialog()">Close</button>
    </div>
  `,
  styles: [
    `
      .qr-code-container {
        text-align: center;
      }
      .qr-code-image {
        width: 150px;
        height: 150px;
        margin: 20px 0;
      }
    `,
  ],
  imports: [MatDialogModule, CommonModule],
})
export class QRCodeDialogComponent {
  constructor(private dialogRef: MatDialogRef<QRCodeDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
