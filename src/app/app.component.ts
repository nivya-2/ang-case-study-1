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


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TableHeaderComponent, SearchBarComponent, SortByDateComponent,ButtonComponent,ImageLabelComponent,TitleSubtitleComponent,NavIconsComponent,ActionIconsComponent,HighlightFunnelComponent,HighlightSettingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'caseStudy';
}
