export default defineI18nConfig(() => ({
  legacy: false,
  globalInjection: true,
  fallbackLocale: 'tr',
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  warnHtmlMessage: false,
  escapeParameterHtml: true,
  modifiers: {
    // Özel modifier'lar buraya eklenebilir
  }
}))
