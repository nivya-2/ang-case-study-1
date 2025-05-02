import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RowComponent } from './row/row.component';

@Component({
  imports: [ CommonModule, MatTableModule, MatCheckboxModule, MatIconModule, MatButtonModule, RowComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'casestudy';

  items = [
    {
      product: 'Lenovo 3rd Generation',
      image: 'https://via.placeholder.com/40?text=L',
      sku: 'PT001',
      category: 'Laptop',
      brand: 'Lenovo',
      price: '$12500.00',
      unit: 'Pc',
      qty: '100',
      createdby: 'Arroon',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      action: 'Edit',
      selected: false,
    },
    {
      product: 'Bold V3.2',
      image: 'https://via.placeholder.com/40?text=B',
      sku: 'PT002',
      category: 'Electronics',
      brand: 'Bolt',
      price: '$1600.00',
      unit: 'Pc',
      qty: '140',
      createdby: 'Kenneth',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      action: 'Edit',
      selected: false,
    },
    {
      product: 'Nike Jordan',
      image: 'https://via.placeholder.com/40?text=N',
      sku: 'PT003',
      category: 'Shoe',
      brand: 'Nike',
      price: '$6000.00',
      unit: 'Pc',
      qty: '780',
      createdby: 'Gooch',
      avatar: 'https://randomuser.me/api/portraits/men/60.jpg',
      action: 'Edit',
      selected: false,
    }
  ];  
  displayedColumns: string[] = [
    'select',
    'product',
    'sku',
    'category',
    'brand',
    'price',
    'unit',
    'qty',
    'createdby',
    'action'
  ];

}
