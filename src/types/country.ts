import { Cases } from '@/types/cases';
import { Deaths } from '@/types/deaths';
import { Tests } from '@/types/tests';

export interface Country {
  continent: string;
  country: string;
  population?: number;
  cases: Cases;
  deaths: Deaths;
  tests: Tests;
  day: string;
  time: Date;
}
