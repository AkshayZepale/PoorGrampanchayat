type SupportedLang = 'mr' | 'en' | 'hi';

export function getLocalizedField<T>(
  item: T | null | undefined,
  fieldBase: string,
  lang: string | null | undefined,
  defaultLang: SupportedLang = 'mr'
): string {
  if (!item) {
    return '';
  }

  const normalizedLang = ((lang || defaultLang) as SupportedLang).toLowerCase() as SupportedLang;
  const suffixMap: Record<SupportedLang, string> = {
    mr: 'Mr',
    en: 'En',
    hi: 'Hi'
  };

  const preferredSuffix = suffixMap[normalizedLang] ?? suffixMap[defaultLang];
  const fallbackSuffixes = ['Mr', 'En', 'Hi'].filter((suffix) => suffix !== preferredSuffix);

  const candidateKeys = [
    `${fieldBase}${preferredSuffix}`,
    fieldBase,
    ...fallbackSuffixes.map((suffix) => `${fieldBase}${suffix}`)
  ];

  for (const key of candidateKeys) {
    const value = (item as any)[key];
    if (typeof value === 'string' && value.trim()) {
      return value;
    }
  }

  return '';
}

