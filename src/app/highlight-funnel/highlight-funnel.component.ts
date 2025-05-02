import { Component } from '@angular/core';
import { HighlightButtonComponent } from '../highlight-button/highlight-button.component';

@Component({
  selector: 'app-highlight-funnel',
  imports: [HighlightButtonComponent],
  templateUrl: './highlight-funnel.component.html',
  styleUrl: './highlight-funnel.component.css'
})
export class HighlightFunnelComponent {
state: string = 'funnel';
image:string= 'assets/images/funnel.png';
}
