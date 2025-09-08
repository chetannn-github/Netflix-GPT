import OpenAI from 'openai';

let key = import.meta.env.VITE_API_KEY;
// console.log(key)

export const openai = new OpenAI({
  apiKey:key,dangerouslyAllowBrowser: true
});

