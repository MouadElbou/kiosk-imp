import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonCardComponent } from "./button-card/button-card.component";
import { MatGridListModule } from '@angular/material/grid-list'; // Import MatGridListModule


@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule, ButtonCardComponent,MatGridListModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
switchToArabic() {
throw new Error('Method not implemented.');
}
switchToEnglish() {
throw new Error('Method not implemented.');
}

pageLoaded = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.pageLoaded = true;
    }, 100); // Delay to apply transition effect
  }


}
