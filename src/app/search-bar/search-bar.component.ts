import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [MatFormFieldModule,
    MatInputModule,
    MatIconModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  searchQuery: string = '';

  onSearch() {
    console.log('Searching for:', this.searchQuery);
    // You can trigger a filter or API call here
  }

}
