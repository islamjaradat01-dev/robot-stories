import { describe, it, expect } from 'vitest';
import { dirOf, isLang, localize } from './localize';

describe('localize', () => {
  it('returns English by default', () => {
    expect(localize({ en: 'Moon', ar: 'القمر' }, 'en')).toBe('Moon');
  });
  it('returns Arabic when available', () => {
    expect(localize({ en: 'Moon', ar: 'القمر' }, 'ar')).toBe('القمر');
  });
  it('falls back to English when the Arabic is missing or blank', () => {
    expect(localize({ en: 'Moon' }, 'ar')).toBe('Moon');
    expect(localize({ en: 'Moon', ar: '  ' }, 'ar')).toBe('Moon');
  });
  it('handles undefined text', () => {
    expect(localize(undefined, 'en')).toBe('');
  });
  it('sets direction per language', () => {
    expect(dirOf('en')).toBe('ltr');
    expect(dirOf('ar')).toBe('rtl');
  });
  it('validates language codes', () => {
    expect(isLang('ar')).toBe(true);
    expect(isLang('fr')).toBe(false);
  });
});
