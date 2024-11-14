import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './button-card.component.html',
  styleUrls: ['./button-card.component.css'], 
  animations: [
    trigger('clickAnimation', [
      state('default', style({ 
        transform: 'scale(1)', 
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
      })),
      state('clicked', style({ 
        transform: 'scale(0.98)', 
        backgroundColor: '#6bb3fa', // Azure blue color
        boxShadow: '0 4px 12px rgba(0, 127, 255, 0.5)' 
      })),
      transition('default <=> clicked', animate('100ms ease-in')),
    ]),
  ],
})
export class ButtonCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon!: string;
  @Input() Action!: string;
  @Input() isRectangle = false; // default is false for regular cards
  @Input() routerLink?: string; // Add this line

  clickState = 'default';

  onClick() {
    this.clickState = 'clicked';
    setTimeout(() => this.clickState = 'default', 100); // Reset after animation
  }
 
}
