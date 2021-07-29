import {
  createMatchRegex,
  matchTitle,
  SuspiciousKeywords,
} from '~/contracts/SuspiciousKeywords';

export const englishKeywords: SuspiciousKeywords[] = [
  { keyword: matchTitle('Log\\s*in to Facebook'), score: 10 },
  { keyword: matchTitle('Facebook – log\\s*in or sign\\s*up'), score: 10 },
  { keyword: createMatchRegex('Facebook helps you connect and share with the people in your life.'), score: 10 },
  { keyword: createMatchRegex('Log\\s*in to Facebook'), score: 10 },
  { keyword: /\s*Facebook\s*©\s*\d{4}/g, score: 10 },
  { keyword: createMatchRegex('Create a Page for a celebrity, band or business.'), score: 8 },
  { keyword: createMatchRegex('Connect with friends and the'), score: 4 },
  { keyword: createMatchRegex('world around you on Facebook.'), score: 4 },
  { keyword: createMatchRegex('Sign\\s*up for Facebook'), score: 8 },
  { keyword: createMatchRegex('Email address or phone number'), score: 2 },
  { keyword: createMatchRegex('Email or Phone'), score: 2 },
  { keyword: createMatchRegex('password'), score: 2 },
  { keyword: createMatchRegex('Facebook Lite'), score: 4 },
  { keyword: createMatchRegex('Forgotten account?'), score: 2 },

  { keyword: createMatchRegex('Messenger'), score: 1 },
  { keyword: createMatchRegex('Watch'), score: 1 },
  { keyword: createMatchRegex('Page categories'), score: 1 },
  { keyword: createMatchRegex('Places'), score: 1 },
  { keyword: createMatchRegex('Locations'), score: 1 },
  { keyword: createMatchRegex('Marketplace'), score: 1 },
  { keyword: createMatchRegex('Facebook Pay'), score: 1 },
  { keyword: createMatchRegex('Fundraisers'), score: 1 },
  { keyword: createMatchRegex('Create ad'), score: 1 },
  { keyword: createMatchRegex('Create Page'), score: 1 },
];
