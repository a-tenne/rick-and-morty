import { Url } from './common';

type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';

interface Location {
  name: string;
  url: Url;
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: Url;
  episode: Url[];
  url: Url;
  created: string;
}

export { Character };
