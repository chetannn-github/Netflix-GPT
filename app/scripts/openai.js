import OpenAI from 'openai';

let key = process.env.EXPO_PUBLIC_API_KEY;


export const openai = new OpenAI({
  apiKey:key,dangerouslyAllowBrowser: true
});

