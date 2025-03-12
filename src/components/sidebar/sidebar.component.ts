import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, NgFor],
  template: `
    <div class="sidebar">
      <div class="logo">
        <img src="smart-wi-logo.png" alt="SMART.WI" />
      </div>
      
      <div class="nav-items">
        <div *ngFor="let item of navItems" 
             [routerLink]="item.route"
             routerLinkActive="active"
             class="nav-item">
          <span class="icon">
            <i class="material-icons">{{item.icon}}</i>
          </span>
          <span class="label">{{item.label}}</span>
        </div>
      </div>
      
      <div class="sidebar-footer">
        <div class="settings" routerLink="/settings">
          <i class="material-icons">settings</i>
          <span>Settings</span>
        </div>
        <div class="logout">
          <i class="material-icons">logout</i>
          <span>Logout</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .sidebar {
      width: 240px;
      background-color: white;
      height: 100%;
      box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.05);
      display: flex;
      flex-direction: column;
    }

    .logo {
      padding: 20px;
      text-align: center;
    }
    
    .logo img {
      height: 40px;
    }

    .nav-items {
      flex: 1;
    }
    
    .nav-item {
      display: flex;
      align-items: center;
      padding: 12px 20px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    
    .nav-item:hover {
      background-color: #f5f5f5;
    }
    
    .nav-item.active {
      background-color: #eef5ff;
      border-left: 3px solid #1976d2;
    }
    
    .icon {
      margin-right: 12px;
      color: #555;
    }

    .sidebar-footer {
      margin-top: auto;
      border-top: 1px solid #eee;
    }
    
    .settings, .logout {
      display: flex;
      align-items: center;
      padding: 12px 20px;
      cursor: pointer;
    }
    
    .settings:hover, .logout:hover {
      background-color: #f5f5f5;
    }
    
    .settings i, .logout i {
      margin-right: 12px;
      color: #555;
    }
  `]
})
export class SidebarComponent {
  navItems = [
    { icon: 'factory', label: 'Plants', route: '/plants' },
    { icon: 'settings', label: 'Assets', route: '/assets' }
  ];
}