import { Component } from '@angular/core';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-nav-icons',
  imports: [IconButtonComponent,NgFor],
  templateUrl: './nav-icons.component.html',
  styleUrl: './nav-icons.component.css'
})
export class NavIconsComponent {
  images: string[] = [
    'assets/images/pdf.png',
    'assets/images/excel.png',
    'assets/images/print.png',
    'assets/images/refresh.png',
    'assets/images/up.png',


  ];
}
