import { Routes } from '@angular/router';
import { AssetOverviewComponent } from '../components/asset-overview/asset-overview.component';
import { PlantOverviewComponent } from '../components/plant-overview/plant-overview.component';
import { PlantDetailsComponent } from '../components/plant-details/plant-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'plants', pathMatch: 'full' }, // Redirect default path to 'plants'
  { path: 'plants', component: PlantOverviewComponent },
  { path: 'plants/:id', component: PlantDetailsComponent },
  { path: 'assets', component: AssetOverviewComponent },
  { path: '**', redirectTo: 'plants' } // Redirect unknown paths to 'plants'
];
