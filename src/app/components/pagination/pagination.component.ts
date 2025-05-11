import {
  Component,
  Input,
  OnChanges,
  signal,
  SimpleChanges,
} from '@angular/core';
import { PageInfo } from '../../../models/common';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination',
  imports: [NgIf, RouterLink, NgFor],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentPageNum'] || changes['pageInfo']) {
      const nums = [],
        max = this.pageInfo.pages;
      for (
        let i = this.currentPageNum + 1, j = 1;
        i <= max && j <= 5;
        ++i, ++j
      ) {
        nums.push(i);
      }
      this.nextThree.set(nums);
    }
  }
  @Input()
  pageInfo!: PageInfo;
  @Input()
  currentPageNum!: number;
  nextThree = signal<number[]>([]);
}
