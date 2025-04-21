import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Episode } from '../../models/episode';
import { Page, Url } from '../../models/common';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  private baseUrl = 'https://rickandmortyapi.com/api/episode';
  private client = inject(HttpClient);

  public getEpisodePage(page?: number) {
    return this.client.get<Page<Episode>>(
      `${this.baseUrl}${page !== undefined ? '?page=' + page.toString() : ''}`
    );
  }

  public getEpisodeById(id: number) {
    return this.client.get<Episode>(`${this.baseUrl}/${id}`);
  }

  public getEpisodeByUrl(url: Url) {
    return this.client.get<Location>(url);
  }
}
