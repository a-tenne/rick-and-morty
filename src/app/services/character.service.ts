import { inject, Injectable } from '@angular/core';
import { Character } from '../../models/character';
import { HttpClient } from '@angular/common/http';
import { Page, Url } from '../../models/common';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private baseUrl = 'https://rickandmortyapi.com/api/character';
  private client = inject(HttpClient);

  public getCharacterPage(page?: number) {
    return this.client.get<Page<Character>>(
      `${this.baseUrl}${page !== undefined ? '?page=' + page.toString() : ''}`
    );
  }

  public getCharacterById(id: number) {
    return this.client.get<Character>(`${this.baseUrl}/${id}`);
  }

  public getCharacterByUrl(url: Url) {
    return this.client.get<Character>(url);
  }
}
