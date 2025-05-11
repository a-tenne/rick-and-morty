import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CharacterCardComponent } from '../components/character-card/character-card.component';
import { CharacterService } from '../services/character.service';
import { Character } from '../../models/character';
import { Page } from '../../models/common';
import { catchError } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-character',
  imports: [CharacterCardComponent, RouterLink, NgIf],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
})
export class CharacterComponent implements OnInit {
  private characterService = inject(CharacterService);
  characterId = signal(0);
  characterPage = signal<Page<Character> | null>(null);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const param = params.get('id');
      const id = Number(param);
      if (!Number.isNaN(id)) {
        this.characterId.set(id);
      }
    });
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

  public randomId(): number {
    return Math.ceil(Math.random() * this.characterPage()!.info.count);
  }
}
