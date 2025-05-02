import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-th',
  imports: [RouterOutlet,CommonModule,MatIconModule,MatSortModule,MatTableModule,MatCheckboxModule],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'caseStudy';

  displayedColumns: string[] = [
     'select','product', 'sku', 'category', 'brand', 'price', 'unit', 'qty', 'createdBy', 'action'
  ];

  PRODUCT_DATA = [
    {
      product: 'Lenovo 3rd Generation',
      image: 'https://via.placeholder.com/40x40?text=L',
      sku: 'PT001',
      category: 'Laptop',
      brand: 'Lenovo',
      price: 12500,
      unit: 'Pc',
      qty: 100,
      createdBy: { name: 'Arroon', avatar: 'https://i.pravatar.cc/40?img=1' }
    },
    {
      product: 'Bold V3.2',
      image: 'https://via.placeholder.com/40x40?text=B',
      sku: 'PT002',
      category: 'Electronics',
      brand: 'Bolt',
      price: 1600,
      unit: 'Pc',
      qty: 140,
      createdBy: { name: 'Kenneth', avatar: 'https://i.pravatar.cc/40?img=2' }
    },
    {
      product: 'Nike Jordan',
      image: 'https://via.placeholder.com/40x40?text=N',
      sku: 'PT003',
      category: 'Shoe',
      brand: 'Nike',
      price: 6000,
      unit: 'Pc',
      qty: 780,
      createdBy: { name: 'Gooch', avatar: 'https://i.pravatar.cc/40?img=3' }
    }
  ];

  dataSource = new MatTableDataSource(this.PRODUCT_DATA);

  @ViewChild(MatSort)  sort!: MatSort;


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

}
