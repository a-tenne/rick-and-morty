import { Url } from './common';

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Url[];
  created: string;
}

export { Episode };
