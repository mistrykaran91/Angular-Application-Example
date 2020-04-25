export interface Language {
  code: string;
  name: string;
}

export const LANGUAGE = [
  {
    code: "en",
    name: "ENGLISH"
  },
  {
    code: "hin",
    name: "HINDI"
  }
] as Language[];

export const defaultLanguage = LANGUAGE[0].code;

