import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-subtitle',
  imports: [],
  templateUrl: './title-subtitle.component.html',
  styleUrl: './title-subtitle.component.css'
})
export class TitleSubtitleComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
