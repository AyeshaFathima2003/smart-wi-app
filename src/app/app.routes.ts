import { Routes } from '@angular/router';
import { AssetOverviewComponent } from '../components/asset-overview/asset-overview.component';  // FIXED PATH

export const routes: Routes = [
  { path: '', component: AssetOverviewComponent },
  { path: 'plants', component: AssetOverviewComponent },
  { path: 'assets', component: AssetOverviewComponent }
];
