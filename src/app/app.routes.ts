import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationMapComponent } from './navigation-map/navigation-map.component';

export const routes: Routes = [
    { path:'home', component: HomeComponent },
    { path:'map', component: NavigationMapComponent },
    { path:'', redirectTo:'home', pathMatch:'full' },
];
