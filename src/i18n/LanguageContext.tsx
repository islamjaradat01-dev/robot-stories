import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Lang, LText } from '../data/schema';
import { DEFAULT_LANG, dirOf, isLang, localize } from './localize';
import { STRINGS, Strings } from './strings';

interface LangCtx {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  setLang: (l: Lang) => void;
  s: Strings;
  /** Translate mission content */
  tx: (t: LText | undefined) => string;
  /** Replace {placeholders} in an interface string */
  fmt: (template: string, vars: Record<string, string | number>) => string;
}

const Ctx = createContext<LangCtx | null>(null);
const KEY = 'lang';

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(KEY);
    if (isLang(saved)) return saved;
  } catch { /* storage unavailable: default to English */ }
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dirOf(lang);
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(KEY, l); } catch { /* ignore */ }
  }, []);

  const value = useMemo<LangCtx>(() => ({
    lang, dir: dirOf(lang), setLang, s: STRINGS[lang],
    tx: (t) => localize(t, lang),
    fmt: (template, vars) => template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? '')),
  }), [lang, setLang]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang(): LangCtx {
  const v = useContext(Ctx);
  if (!v) throw new Error('useLang must be used inside LanguageProvider');
  return v;
}
