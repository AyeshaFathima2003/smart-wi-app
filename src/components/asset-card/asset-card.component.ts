import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Asset } from '../models/asset';

@Component({
  selector: 'app-asset-card',
  standalone: true,
  imports: [NgIf, NgClass],
  template: `
    <div class="asset-card" [ngClass]="{ 'horizontal': layout === 'row', 'vertical': layout === 'column' }">
      <div class="asset-image">
        <img [src]="asset.imageUrls" [alt]="asset.name">
      </div>
      
      <div class="asset-content">
        <div class="asset-status" *ngIf="asset.status">
          <span class="status-indicator" [ngClass]="asset.status"></span>
          <span class="status-text">{{asset.status === 'ok' ? 'OK' : 'Warning'}}</span>
        </div>
        
        <div class="asset-info">
          <h3 class="asset-name">{{asset.name}}</h3>
          <p class="asset-description">{{asset.description}}</p>
        </div>
        
        <button class="details-btn">Details</button>
      </div>
    </div>
  `,
  styles: [`
    .asset-card {
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      display: flex;
    }

    /* Default Vertical Layout */
    .vertical {
      flex-direction: column;
      width: 200px;
    }

    .vertical .asset-image {
      height: 140px;
    }

    /* Horizontal Layout */
    .horizontal {
      flex-direction: row;
      width: 350px;
      height: 120px;
    }

    .horizontal .asset-image {
      width: 100px;
      height: auto;
    }

    .asset-image {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px;
      background-color: #f9f9f9;
    }

    .asset-image img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    .asset-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 12px;
      flex: 1;
    }

    .asset-status {
      display: flex;
      align-items: center;
      font-size: 12px;
    }

    .status-indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-right: 6px;
    }

    .status-indicator.ok {
      background-color: #4caf50;
    }

    .status-indicator.warning {
      background-color: #ff9800;
    }

    .asset-name {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 4px;
    }

    .asset-description {
      font-size: 12px;
      color: #666;
      margin: 0;
    }

    .details-btn {
      padding: 6px 16px;
      background-color: #1976d2;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }

    .details-btn:hover {
      background-color: #1565c0;
    }
  `]
})
export class AssetCardComponent {
  @Input() asset!: Asset;
  @Input() layout: 'row' | 'column' = 'column';
}
