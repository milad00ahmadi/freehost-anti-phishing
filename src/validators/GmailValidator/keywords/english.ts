import {
  createMatchRegex,
  matchInsideQuote,
  matchTitle,
  SuspiciousKeywords,
} from '~/contracts/SuspiciousKeywords';

export const englishKeywords: SuspiciousKeywords[] = [
  { keyword: createMatchRegex('google account'), score: 3 },
  { keyword: matchInsideQuote('email or phone'), score: 2 },
  { keyword: createMatchRegex('privacy'), score: 2 },
  { keyword: createMatchRegex('create account'), score: 1 },
  { keyword: createMatchRegex('with your Google Account'), score: 4 },
  { keyword: createMatchRegex('to continue to Gmail'), score: 4 },
  { keyword: matchTitle('Gmail'), score: 9 },
];
