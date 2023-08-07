// languages that have translation files in `public/locales`
export const i18nLanguages = [
  'en',
  'en-GB',
  'en-US',
  'es',
  'fr',
  'fr-FR',
  'it',
  'ja',
] as const;

// languages that are selectable on the web page
export const selectableLanguages = [
  // 'en',
  'en-GB',
  'en-US',
  'es',
  // 'fr',
  'fr-FR',
  'it',
  'ja',
] as const;

export const languageCodeToName = {
  'en': 'English',
  'en-GB': 'English (UK)',
  'en-US': 'English (US)',
  'es': 'Español',
  'fr': 'Français',
  'fr-FR': 'Français', // Français (France). no need to include "France" at this time, as there is currently only one variant
  'it': 'Italiano',
  'ja': '日本語',
};
