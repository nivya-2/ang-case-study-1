import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sort-by-date',
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './sort-by-date.component.html',
  styleUrl: './sort-by-date.component.css'
})
export class SortByDateComponent {
  sort(order: 'asc' | 'desc') {
    console.log('Sorting by date:', order);
    // Implement your sorting logic here
  }

}
