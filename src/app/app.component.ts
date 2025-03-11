import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div class="app-container">
      <app-sidebar></app-sidebar>
      <div class="main-content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      height: 100vh;
      background-color: #f0f2f5;
    }

    .main-content {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
    }
  `]
})
export class AppComponent {
  title = 'smart-wl-app';
}