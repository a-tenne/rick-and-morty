import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./character/character.component').then(
        (m) => m.CharacterComponent
      );
    },
  },
  {
    path: 'character/:id',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./character/character.component').then(
        (m) => m.CharacterComponent
      );
    },
  },
  {
    path: 'characters',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./characters/characters.component').then(
        (m) => m.CharactersComponent
      );
    },
  },
  {
    path: 'characters/:page',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./characters/characters.component').then(
        (m) => m.CharactersComponent
      );
    },
  },
];
