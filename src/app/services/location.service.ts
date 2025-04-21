import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Location } from '../../models/location';
import { Page, Url } from '../../models/common';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private client = inject(HttpClient);
  private baseUrl = 'https://rickandmortyapi.com/api/location';

  public getLocationPage(page?: number) {
    return this.client.get<Page<Location>>(
      `${this.baseUrl}${page !== undefined ? '?page=' + page.toString() : ''}`
    );
  }

  public getLocationById(id: number) {
    return this.client.get<Location>(`${this.baseUrl}/${id}`);
  }

  public getLocationsByUrl(url: Url) {
    return this.client.get<Location>(url);
  }
}
