export default {
  defaultLocale: "en",

  // Routes generation strategy
  strategy: "prefix_except_default",

  // Directory that contains translation files to load
  langDir: "~/content/translations/",

  // List of locales supported by your app
  locales: [
    { code: "en", iso: "en-US", file: "en.ts" },
    { code: "de", iso: "de-DE", file: "de.ts" },
  ],
}
