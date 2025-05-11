import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Character } from '../../../models/character';

@Component({
  selector: 'app-sm-character-card',
  imports: [RouterLink],
  templateUrl: './sm-character-card.component.html',
  styleUrl: './sm-character-card.component.scss',
})
export class SmCharacterCardComponent {
  @Input() character!: Character;
}
