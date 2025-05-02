import { Component } from '@angular/core';
import { HighlightButtonComponent } from '../highlight-button/highlight-button.component';

@Component({
  selector: 'app-highlight-settings',
  imports: [HighlightButtonComponent],
  templateUrl: './highlight-settings.component.html',
  styleUrl: './highlight-settings.component.css'
})
export class HighlightSettingsComponent {
  state: string = 'settings';
  image:string= 'assets/images/settings.png';
}
