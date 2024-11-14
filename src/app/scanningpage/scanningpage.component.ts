import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-scanningpage',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,RouterModule,CommonModule],
  templateUrl: './scanningpage.component.html',
  styleUrl: './scanningpage.component.css'
})

export class ScanningpageComponent {

  pageLoaded = false;


  ngOnInit(): void {
    setTimeout(() => {
      this.pageLoaded = true;
    }, 100); // Delay to apply transition effect
  }

}
