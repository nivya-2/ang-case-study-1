import { AfterViewInit, Component, Input, input, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RowComponent } from "../row/row.component";



@Component({
  selector: 'app-th',
  imports: [RouterOutlet, CommonModule, MatIconModule, MatSortModule, MatTableModule, MatCheckboxModule, RowComponent],
  templateUrl:'./app-th.component.html',
  styleUrl:'./app-th.component.css'
})
export class TableHeaderComponent implements OnInit{
  title = 'caseStudy';

 
 columns:string[] = [
   'product', 'sku', 'category', 'brand', 'price', 'unit', 'qty', 'createdBy'
];
displayedColumns: string[] = [
  'select',...this.columns ,'action'
];


  @Input() items: any[] = [];

  dataSource!: MatTableDataSource<any>;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.items);
  }

  @ViewChild(MatSort)  sort!: MatSort;


}
