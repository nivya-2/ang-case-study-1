import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageLabelComponent } from './image-label/image-label.component';
import { TitleSubtitleComponent } from './title-subtitle/title-subtitle.component';
import { HighlightFunnelComponent } from './highlight-funnel/highlight-funnel.component';
import { HighlightSettingsComponent } from './highlight-settings/highlight-settings.component';
import { ActionIconsComponent } from './action-icons/action-icons.component';
import { NavIconsComponent } from './nav-icons/nav-icons.component';
import { ButtonComponent } from "./button/button.component";





import { SearchBarComponent } from './search-bar/search-bar.component';
import { SortByDateComponent } from './sort-by-date/sort-by-date.component';
import { TableHeaderComponent} from './tableHeader/app-th.component';

import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RowComponent } from './row/row.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TableHeaderComponent, SearchBarComponent, SortByDateComponent,ButtonComponent,ImageLabelComponent,TitleSubtitleComponent,NavIconsComponent,ActionIconsComponent,HighlightFunnelComponent,HighlightSettingsComponent,CommonModule, MatTableModule, MatCheckboxModule, MatIconModule, MatButtonModule, RowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'caseStudy';

  items = [
    {
      product: 'Lenovo 3rd Generation',
      image: 'assets/laptop.jpg',
      sku: 'PT001',
      category: 'Laptop',
      brand: 'Lenovo',
      price: '$12500.00',
      unit: 'Pc',
      qty: '100',
      createdby: 'Arroon',
      avatar: 'assets/arroonn.avif',
      action: 'Edit',
      selected: false,
    },
    {
      product: 'Bold V3.2',
      image: 'assets/earphone.jpg',
      sku: 'PT002',
      category: 'Electronics',
      brand: 'Bolt',
      price: '$1600.00',
      unit: 'Pc',
      qty: '140',
      createdby: 'Kenneth',
      avatar: 'assets/kenneth.jpg',
      action: 'Edit',
      selected: false,
    },
    {
      product: 'Nike Jordan',
      image: 'assets/shoes.jpg',
      sku: 'PT003',
      category: 'Shoe',
      brand: 'Nike',
      price: '$6000.00',
      unit: 'Pc',
      qty: '780',
      createdby: 'Gooch',
      avatar: 'assets/gooch.jpg',
      action: 'Edit',
      selected: false,
    }
  ];  
 
}
