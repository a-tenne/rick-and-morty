import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CharacterCardComponent } from '../components/character-card/character-card.component';
import { CharacterService } from '../services/character.service';
import { Character } from '../../models/character';
import { Page } from '../../models/common';
import { catchError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  imports: [CharacterCardComponent],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
})
export class CharacterComponent implements OnInit {
  private characterService = inject(CharacterService);
  characterId = signal(0);
  private characterPage = signal<Page<Character> | null>(null);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!Number.isNaN(id)) {
      this.characterId.set(id);
    }
    this.characterService
      .getCharacterPage()
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        })
      )
      .subscribe((page) => {
        this.characterPage.set(page);
        if (this.characterId() === 0) {
          this.characterId.set(this.randomId());
        }
      });
  }

  private randomId(): number {
    return Math.ceil(Math.random() * this.characterPage()!.info.count);
  }

  randomIdWrapper(): void {
    this.characterId.set(this.randomId());
  }
}
