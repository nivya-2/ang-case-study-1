import { Component } from '@angular/core';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-action-icons',
  imports: [IconButtonComponent,NgFor],
  templateUrl: './action-icons.component.html',
  styleUrl: './action-icons.component.css'
})
export class ActionIconsComponent {
  images: string[] = [
    'assets/images/eye.png',
    'assets/images/edit.png',
    'assets/images/trash.png'
  ];
}
