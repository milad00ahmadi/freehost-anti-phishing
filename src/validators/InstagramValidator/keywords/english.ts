import {
  createMatchRegex,
  matchTitle,
  SuspiciousKeywords,
} from '~/contracts/SuspiciousKeywords';

export const englishKeywords: SuspiciousKeywords[] = [
  { keyword: matchTitle('Logins*•Instagram'), score: 9 },
  { keyword: createMatchRegex("don't have an account?"), score: 1 },
  { keyword: createMatchRegex('or'), score: 1 },
  { keyword: createMatchRegex('forgot password?'), score: 1 },
  { keyword: createMatchRegex('log in'), score: 1 },
  { keyword: createMatchRegex('login'), score: 1 },
  { keyword: createMatchRegex('Phone number, username, or email'), score: 3 },
  { keyword: createMatchRegex('Get the app.'), score: 1 },
  { keyword: /\d{4}\s*Instagram(\s*from\s*Facebook)?/gis, score: 3 },
  { keyword: createMatchRegex('Top Accounts'), score: 1 },
  { keyword: createMatchRegex('Get Free Followers'), score: 9 },
  { keyword: createMatchRegex('Instagram username'), score: 5 },
  { keyword: createMatchRegex('Instagram password'), score: 5 },
];
