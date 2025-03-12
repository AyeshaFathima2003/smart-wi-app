// plant-details.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

interface PlantDetails {
  id: string;
  name: string;
  location: string;
  status: string;
  waterType: string;
  assignedAssets: number;
  contact: {
    name: string;
    email: string;
  };
}

@Component({
  selector: 'app-plant-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="plant-details-container">
      <div class="back-link">
        <a routerLink="/plants" class="back-button">
          <span class="back-arrow">←</span> Back to Plants overview
        </a>
      </div>
      
      <div class="plant-header">
        <h2 class="plant-title">{{plantDetails?.name}}</h2>
        <div class="plant-location">{{plantDetails?.location}}</div>
      </div>
      
      <div class="information-section">
        <h3 class="section-title">Information</h3>
        
        <div class="info-cards">
          <div class="info-card">
            <div class="card-label">Assigned assets</div>
            <div class="card-value">{{plantDetails?.assignedAssets}}</div>
          </div>
          
          <div class="info-card status-card">
            <div class="card-label">Status</div>
            <div class="card-value">{{plantDetails?.status}}</div>
          </div>
          
          <div class="info-card water-type-card">
            <div class="card-label">Water Type</div>
            <div class="card-value">{{plantDetails?.waterType || '-'}}</div>
          </div>
        </div>
        
        <div class="general-info-section">
          <h3 class="subsection-title">General Information</h3>
          <div class="subsection-subtitle">Plant details</div>
          
          <div class="details-grid">
            <div class="details-row">
              <div class="details-column">
                <div class="details-label">Plant Name</div>
                <div class="details-value">{{plantDetails?.name}}</div>
              </div>
              <div class="details-column">
                <div class="details-label">Additional information</div>
                <div class="details-value"></div>
              </div>
            </div>
            
            <div class="details-row">
              <div class="details-column">
                <div class="details-label">Location</div>
                <div class="details-value">{{plantDetails?.location}}</div>
              </div>
              <div class="details-column">
                <div class="details-label">Contact</div>
                <div class="details-value">
                  <div>{{plantDetails?.contact?.name}}</div>
                  <div class="contact-email">{{plantDetails?.contact?.email}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .plant-details-container {
      padding: 20px;
      background-color: #f5f7fa;
      min-height: 100vh;
    }
    .back-link {
      margin-bottom: 20px;
    }
    .back-button {
      color: #0052cc;
      text-decoration: none;
      display: flex;
      align-items: center;
      font-size: 14px;
    }
    .back-arrow {
      margin-right: 5px;
    }
    .plant-header {
      margin-bottom: 20px;
    }
    .plant-title {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 5px;
    }
    .plant-location {
      color: #666;
      font-size: 14px;
    }
    .section-title, .subsection-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
      color: #333;
    }
    .subsection-subtitle {
      font-size: 14px;
      color: #666;
      margin-bottom: 15px;
    }
    .info-cards {
      display: flex;
      gap: 15px;
      margin-bottom: 20px;
    }
    .info-card {
      background: white;
      border-radius: 4px;
      padding: 15px;
      flex: 1;
      max-width: 230px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    .status-card {
      background-color: #2e7d32; /* Green for "Dry" status */
      color: white;
    }
    .water-type-card {
      background-color: #2e7d32; /* Green to match the image */
      color: white;
    }
    .card-label {
      font-size: 12px;
      margin-bottom: 5px;
    }
    .card-value {
      font-size: 18px;
      font-weight: 600;
    }
    .general-info-section {
      background: white;
      border-radius: 4px;
      padding: 20px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    .details-grid {
      margin-top: 15px;
    }
    .details-row {
      display: flex;
      border-bottom: 1px solid #eee;
      padding: 15px 0;
    }
    .details-row:last-child {
      border-bottom: none;
    }
    .details-column {
      flex: 1;
    }
    .details-label {
      font-size: 14px;
      color: #666;
      margin-bottom: 5px;
    }
    .details-value {
      font-size: 14px;
      font-weight: 500;
    }
    .contact-email {
      color: #0052cc;
      font-size: 14px;
    }
  `]
})
export class PlantDetailsComponent implements OnInit {
  plantId: string | null = null;
  plantDetails: PlantDetails | null = null;

  // Mock data - in a real app, you would fetch this from a service
  mockPlantDetails: Record<string, PlantDetails> = {
    'Digi.Lab': {
      id: 'Digi.Lab',
      name: 'Digi.Lab',
      location: 'Pforzheim',
      status: 'Dry',
      waterType: '-',
      assignedAssets: 6,
      contact: {
        name: 'Daniel Rothfuss',
        email: 'daniel.rothfuss@witzenmann.com'
      }
    }
  };

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.plantId = params.get('id');
      
      if (this.plantId) {
        // In a real app, you would fetch from a service
        this.plantDetails = this.mockPlantDetails[this.plantId] || null;
        
        if (!this.plantDetails) {
          // Handle plant not found - could redirect or show error
          console.error(`Plant with ID ${this.plantId} not found`);
        }
      }
    });
  }
}