import { Component, inject, OnInit, signal } from '@angular/core';
import { SmCharacterCardComponent } from '../components/sm-character-card/sm-character-card.component';
import { CharacterService } from '../services/character.service';
import { Character } from '../../models/character';
import { Page } from '../../models/common';
import { catchError } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { PaginationComponent } from '../components/pagination/pagination.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters',
  imports: [SmCharacterCardComponent, NgIf, NgFor, PaginationComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent implements OnInit {
  characterService = inject(CharacterService);
  currentPageNum = signal(1);
  currentPage = signal<Page<Character> | null>(null);

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const param = params.get('page');
      const pageNum = Number(param);

      if (!Number.isNaN(pageNum) && pageNum !== 0) {
        this.currentPageNum.set(pageNum);
      } else {
        this.currentPageNum.set(1);
      }
      this.fetchPage();
    });
  }

  fetchPage() {
    this.characterService
      .getCharacterPage(this.currentPageNum())
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        })
      )
      .subscribe((page) => this.currentPage.set(page));
  }
}
