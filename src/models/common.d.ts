import { Character } from './character';
import { Episode } from './episode';
import { Location } from './location';

type Url = string;
interface Info {}

type PageType = Location | Character | Episode;

interface Page<T extends PageType> {
  info: {
    count: number;
    pages: number;
    next?: Url;
    prev?: Url;
  };
  results: T[];
}

export { Url, Page };
