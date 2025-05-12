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
      const nums1: number[] = [],
        nums2: number[] = [],
        max = this.pageInfo.pages;

      for (let i = this.currentPageNum - 1, j = 0; i > 0 && j < 2; --i, ++j) {
        nums1.unshift(i);
      }
      for (
        let i = this.currentPageNum + 1, j = 0;
        i <= max && j < 2;
        ++i, ++j
      ) {
        nums2.push(i);
      }

      this.prevTwo.set(nums1);
      this.nextTwo.set(nums2);
    }
  }
  @Input()
  pageInfo!: PageInfo;
  @Input()
  currentPageNum!: number;
  prevTwo = signal<number[]>([]);
  nextTwo = signal<number[]>([]);
}
