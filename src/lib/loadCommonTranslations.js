import { cookies } from 'next/headers';
import { getTranslation } from './getTranslation';

export async function loadCommonTranslations(defaultLocale = 'it', namespace = 'common') {
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || defaultLocale;
  const translations = await getTranslation(locale, namespace);
  return { locale, translations };
}
