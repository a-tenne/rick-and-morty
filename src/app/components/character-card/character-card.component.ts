import {
  Component,
  inject,
  input,
  OnChanges,
  signal,
  SimpleChanges,
} from '@angular/core';
import { Character } from '../../../models/character';
import { NgIf } from '@angular/common';
import { CharacterService } from '../../services/character.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-character-card',
  imports: [NgIf],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent implements OnChanges {
  private characterService = inject(CharacterService);
  public characterId = input.required<number>();
  public character = signal<Character | null>(null);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['characterId']) {
      this.setCharacter();
    }
  }

  setCharacter(): void {
    if (this.characterId() === 0) return;
    this.characterService
      .getCharacterById(this.characterId())
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        })
      )
      .subscribe((character) => this.character.set(character));
  }
}
