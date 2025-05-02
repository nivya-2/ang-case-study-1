import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageLabelComponent } from './image-label/image-label.component';
import { TitleSubtitleComponent } from './title-subtitle/title-subtitle.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ImageLabelComponent,TitleSubtitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'casestudy';
}
