export interface SuspiciousKeywords {
  keyword: string | RegExp;
  score: number;
}

export const createMatchRegex = function (value: string): RegExp {
  return new RegExp(`(?:>\\s*${value}\\s*<)|(?:["']\\s*${value}\\s*["'])`, 'si');
};
 

export const matchInsideQuote = function(value: string): RegExp{
    return new RegExp(`["']\\s*${value}\\s*["']`, 'si');
}

export const matchTitle = function(value: string): RegExp{
    return new RegExp(`<title>\\s*${value}\\s*<\\/title>`, 'si');
}