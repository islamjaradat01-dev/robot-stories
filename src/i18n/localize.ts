import type { Lang, LText } from '../data/schema';

export const DEFAULT_LANG: Lang = 'en';
export const dirOf = (lang: Lang): 'ltr' | 'rtl' => (lang === 'ar' ? 'rtl' : 'ltr');

/** Pick the text for a language. Falls back to English so a missing translation never shows blank. */
export function localize(text: LText | undefined, lang: Lang): string {
  if (!text) return '';
  if (lang === 'ar' && text.ar?.trim()) return text.ar;
  return text.en;
}

export function isLang(v: unknown): v is Lang {
  return v === 'en' || v === 'ar';
}
