import { Component } from '@angular/core';
import { NavigationMapComponent } from '../navigation-map/navigation-map.component';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  map = NavigationMapComponent
}
