import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-label',
  imports: [],
  templateUrl: './image-label.component.html',
  styleUrl: './image-label.component.css'
})
export class ImageLabelComponent {
  @Input() imageUrl:string='';
  @Input() label:string='';
}
