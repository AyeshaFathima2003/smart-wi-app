import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Plant {
  id: string;
  name: string;
  location: string;
}

@Component({
  selector: 'app-plant-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="plant; else loading">
      <h2>{{ plant.name }}</h2>
      <p><strong>Location:</strong> {{ plant.location }}</p>
    </div>

    <ng-template #loading>
      <p>Loading plant details...</p>
    </ng-template>
  `
})
export class PlantDetailsComponent implements OnInit {
  plant: Plant | undefined;

  plants: Plant[] = [
    { id: 'N700', name: 'N700', location: 'Ludwigshafen, Germany' },
    { id: 'N703', name: 'N703', location: 'Ludwigshafen, Germany' },
    { id: 'Q305', name: 'Q305', location: 'Ludwigshafen, Germany' },
    { id: 'BP3301', name: 'BP 3301', location: 'Püttlingen, Germany' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const plantId = this.route.snapshot.paramMap.get('id'); // Get ID from route
    this.plant = this.plants.find(p => p.id === plantId); // Find plant by ID
  }
}
