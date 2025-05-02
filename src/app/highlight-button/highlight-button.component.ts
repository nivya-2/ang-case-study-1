import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlight-button',
  imports: [NgIf,NgClass],
  templateUrl: './highlight-button.component.html',
  styleUrl: './highlight-button.component.css'
})
export class HighlightButtonComponent {
  @Input() state: string='funnel';
  @Input() image: string='assets/images/funnel.png';
}
