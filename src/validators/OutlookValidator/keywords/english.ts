import {
  createMatchRegex,
  SuspiciousKeywords,
} from '~/contracts/SuspiciousKeywords';

export const englishKeywords: SuspiciousKeywords[] = [
  { keyword: createMatchRegex('Sign in'), score: 1 },
  { keyword: createMatchRegex('Enter your email, phone, or Skype.'), score: 5 },
  { keyword: createMatchRegex('Enter password'), score: 2 },
  { keyword: createMatchRegex('Keep me signed in'), score: 4 },
  {
    keyword: 'form',
    score: 1,
  },
  {
      keyword: /Privacy.*?Cookies/gmi,
      score: 1,
  },
  {
      keyword: /\d{4}\s*Microsoft/gmi,
      score: 5,
  },
  {
      keyword: /<title>.*?Microsoft/gmi,
      score: 4,
  },
  {
    keyword: createMatchRegex('Please enter the password for your Microsoft account.'),
    score: 9,
  },
  {
    keyword: createMatchRegex('Sign in to your Microsoft account'),
    score: 9,
  },
  {
    keyword: createMatchRegex('Sign in to Microsoft Online Services'),
    score: 9,
  },
  {
    keyword: createMatchRegex('Sign in with your organizational account'),
    score: 9,
  },
];
