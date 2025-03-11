import { Injectable } from '@angular/core';
import { Asset } from '../components/models/asset';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  // Mock data - in a real app this would come from an API
  private assets: Asset[] = [
    {
      id: 'B101WM_01',
      name: 'B101WM_01',
      description: 'Axial Expansion Joint',
      imageUrls: ['assets/images/expansion-joint-1.png'], // ✅ Change to an array
      status: 'ok' // Add status field
    },
    {
      id: 'WR1118S',
      name: 'Expansion Joint WR1118S',
      description: 'Uga Lab',
      imageUrls: ['assets/images/expansion-joint-2.png'], // ✅ Change to an array
      status: 'ok'
    },
    {
      id: 'P7510FA0-2',
      name: 'Expansion Joint P7510FA0-2',
      description: 'Uga Lab',
      imageUrls: ['assets/images/expansion-joint-3.png'], // ✅ Change to an array
      status: 'ok'
    },
    {
      id: 'gauge-1',
      name: 'Pressure Gauge',
      description: 'Monitoring Device',
      imageUrls: ['assets/images/gauge.png'], // ✅ Change to an array
      status: 'ok'
    },
    {
      id: 'stand-1',
      name: 'Equipment Stand',
      description: 'Support Structure',
      imageUrls: ['assets/images/stand.png'], // ✅ Change to an array
      status: 'ok'
    },
    {
      id: 'joint-4',
      name: 'Advanced Joint',
      description: 'High Pressure',
      imageUrls: ['assets/images/expansion-joint-4.png'], // ✅ Change to an array
      status: 'ok'
    }
  ];
  

  getAssets(): Observable<Asset[]> {
    return of(this.assets);
  }
}
