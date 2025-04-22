import { Component } from '@angular/core';
import { SmCharacterCardComponent } from '../components/sm-character-card/sm-character-card.component';

@Component({
  selector: 'app-characters',
  imports: [SmCharacterCardComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {}
