import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableHeaderComponent} from './tableHeader/app-th.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TableHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'caseStudy';
}
