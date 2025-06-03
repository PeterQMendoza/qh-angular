import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';


@Component({
  selector: 'app-navigation-map',
  standalone: true,
  imports: [],
  templateUrl:'./navigation-map.component.html',
  styleUrls: ['./navigation-map.component.css']
})

export class NavigationMapComponent implements OnInit {
  options: L.MapOptions | undefined;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object){}

  async ngOnInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)){
      const L = await import('leaflet');
      this.initializeMap(L);
      // this.intializeOptions(L);
    }
  }

  private initializeMap(L: any) {
    const map = L.map('map').setView([-12.0464, -77.0428], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© Qhawariy - © OpenStreetMap contributors'
    }).addTo(map);
  }
}

