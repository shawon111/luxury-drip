import path from 'path';
import fs from 'fs/promises';

export async function getTranslation(locale = 'it', namespace = 'common') {
  const filePath = path.join(process.cwd(), 'public', 'locales', locale, `${namespace}.json`);
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (e) {
    // fallback to English if file missing
    if (locale !== 'it') {
      return getTranslation('it', namespace);
    }
    return {};
  }
}
