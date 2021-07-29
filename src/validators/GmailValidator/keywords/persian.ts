import { createMatchRegex, SuspiciousKeywords } from "~/contracts/SuspiciousKeywords";

export const persianKeywords: SuspiciousKeywords[] = [
  { keyword: createMatchRegex('ورود به سیستم'), score: 2 },
  { keyword: createMatchRegex('رفتن به Gmail'), score: 3 },
  {
    keyword: createMatchRegex(
      'رایانه شما نیست؟ برای ورود به سیستم به‌طور خصوصی، از حالت «مهمان» استفاده کنید'
    ),
    score: 2,
  },
  { keyword: createMatchRegex('ایمیلتان را فراموش کرده‌اید؟'), score: 1 },
  { keyword: createMatchRegex('راهنما'), score: 2 },
  { keyword: createMatchRegex('حریم خصوصی'), score: 2 },
  { keyword: createMatchRegex('رفتن به Gmail'), score: 2 },

]