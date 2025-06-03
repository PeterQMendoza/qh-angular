import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[RouterModule, BaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'qhawariy';
}
