import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SourceDialogComponent } from './source-dialog/source-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { QRCodeDialogComponent } from './qrcode-dialog/qrcode-dialog.component';


@Component({
  selector: 'app-document-selection',
  standalone: true,
  templateUrl: './document-selection.component.html',
  styleUrls: ['./document-selection.component.css'],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    SourceDialogComponent,
    QRCodeDialogComponent
  ]
})
export class DocumentSelectionComponent {

  selectedDocument: File | null = null;
  selectedDocumentUrl: string | null = null;
  uploadError: string | null = null;
  message: string | null = null;
  isImageFile = false;
  isPdfFile = false;
  isDocFile = false;
  sourceDialogVisible = false;
  showQRCode = false;
  showUSBPrompt = false;
  usbPath: string | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.validateFile(file);
    }
  }

  validateFile(file: File) {
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      this.uploadError = 'Unsupported file type. Please upload a PDF, DOCX, JPG, or PNG file.';
      this.selectedDocument = null;
      this.selectedDocumentUrl = null;
      this.displayMessage(this.uploadError);
    } else {
      this.uploadError = null;
      this.selectedDocument = file;
      this.setFilePreview(file);
    }
  }

  setFilePreview(file: File) {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.selectedDocumentUrl = fileReader.result as string;
      this.isImageFile = file.type.startsWith('image');
      this.isPdfFile = file.type === 'application/pdf';
      this.isDocFile = file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    };
    fileReader.readAsDataURL(file);
  }

  confirmSelection() {
    if (this.selectedDocument) {
      this.displayMessage('Document confirmed for printing!');
      console.log('Document confirmed:', this.selectedDocument.name);
    }
  }

  displayMessage(msg: string) {
    this.message = msg;
    setTimeout(() => {
      this.message = null;
    }, 3000);
  }

  removeSelectedDocument() {
    this.selectedDocument = null;
    this.selectedDocumentUrl = null;
    this.uploadError = null;
    this.isImageFile = false;
    this.isPdfFile = false;
    this.isDocFile = false;
    this.displayMessage("Document removed.");
  }

  pageLoaded = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.pageLoaded = true;
    }, 100); // Delay to apply transition effect
  }

  constructor(private dialog: MatDialog) {}

  openSourceDialog() {
    const dialogRef = this.dialog.open(SourceDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'phone') {
        this.openQRCodeDialog(); // Open QR code dialog for phone selection
      } else if (result === 'usb') {
        this.promptUSB();
      }
    });
  }

  openQRCodeDialog() {
    this.dialog.open(QRCodeDialogComponent);
  }

  promptUSB() {
    // Logic to handle USB input (e.g., show a prompt for the USB input)
    console.log('USB option selected');
  }
  
}
