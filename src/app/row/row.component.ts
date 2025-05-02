import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ActionIconsComponent } from "../action-icons/action-icons.component";
import { ImageLabelComponent } from "../image-label/image-label.component";

@Component({
  selector: 'app-row',
  imports: [CommonModule, MatCheckboxModule, MatIconModule, MatButtonModule, ActionIconsComponent, ImageLabelComponent],
  templateUrl: './row.component.html',
  styleUrl: './row.component.css'
})

export class RowComponent implements OnInit {
  
  @Input() rowData: any;
  ngOnInit(): void {
  }

 

}
