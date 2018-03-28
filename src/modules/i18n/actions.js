import * as types from "./types";

export function setLocale(locale) {
  return { type: types.SET_LOCALE, payload: locale };
}

export function setLocaleLinks(links) {
  return { type: types.SET_LOCALE_LINKS, payload: links };
}

export function setLocaleLinksRegularMode(url) {
  return { type: types.SET_LOCALE_LINKS_REGULAR_MODE, payload: url };
}

export function setLocaleLinksWithoutPrefix(links) {
  return { type: types.SET_LOCALE_LINKS_WITHOUT_PREFIX, payload: links };
}
