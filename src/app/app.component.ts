import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SortByDateComponent } from './sort-by-date/sort-by-date.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchBarComponent, SortByDateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'casestudy';
}
