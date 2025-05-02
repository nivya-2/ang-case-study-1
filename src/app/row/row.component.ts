import { Component, Input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-row',
  imports: [CommonModule, MatCheckboxModule, MatIconModule, MatButtonModule],
  templateUrl: './row.component.html',
  styleUrl: './row.component.css'
})
export class RowComponent {

  @Input() rowData: any;

}
