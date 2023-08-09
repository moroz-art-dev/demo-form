export type Language = 'ru' | 'en' | 'ua';
export interface LanguageOption {
  code: Language;
  name: string;
}
export interface LanguageState {
  currentLanguage: Language;
  availableLanguages: LanguageOption[];
}
