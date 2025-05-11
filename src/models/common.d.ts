import { Character } from './character';
import { Episode } from './episode';
import { Location } from './location';

type Url = string;
interface Info {}

type PageType = Location | Character | Episode;

interface PageInfo {
  count: number;
  pages: number;
  next: Url | null;
  prev: Url | null;
}

interface Page<T extends PageType> {
  info: PageInfo;
  results: T[];
}

export { Url, Page, PageInfo };
