import { Url } from './common';

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Url[];
  url: Url;
  created: string;
}

export { Location };
