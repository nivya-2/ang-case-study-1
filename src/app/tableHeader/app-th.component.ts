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
  templateUrl:'./app-th.component.html',
  styleUrl:'./app-th.component.css'
})
export class TableHeaderComponent implements AfterViewInit {
  title = 'caseStudy';

  displayedColumns: string[] = [
     'select','product', 'sku', 'category', 'brand', 'price', 'unit', 'qty', 'createdBy', 'action'
  ];

 


  dataSource = new MatTableDataSource(this.items);

  @ViewChild(MatSort)  sort!: MatSort;


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

}
