import { Routes } from '@angular/router';
import { AssetOverviewComponent } from '../components/asset-overview/asset-overview.component';
import { PlantOverviewComponent } from '../components/plant-overview/plant-overview.component';
import { PlantDetailsComponent } from '../components/plant-details/plant-details.component'; // Import PlantDetailsComponent

export const routes: Routes = [
  { path: '', component: AssetOverviewComponent },
  { path: 'plants', component: PlantOverviewComponent },
  { path: 'plants/:id', component: PlantDetailsComponent }, // Add Plant Details route
  { path: 'assets', component: AssetOverviewComponent }
  
];
