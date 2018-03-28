import axios from "axios";
import { createReducer } from "../../utils";
import * as types from "./types";
import config from "../../config/config";

const getInitialLinks = (localesAvailables, defaultLocale) => {
  let links = {};

  localesAvailables.forEach(locale => {
    links[locale] = locale == defaultLocale ? "/" : `/${locale}`;
  });

  return links;
};

const initialState = {
  locale: config.defaultLocale,
  defaultLocale: config.defaultLocale,
  localesAvailables: config.localesAvailables,
  localeNames: config.localeNames,
  localeLinks: getInitialLinks(config.localesAvailables, config.defaultLocale)
};

const reducer = createReducer(initialState, {
  [types.SET_LOCALE]: (state, action) => {
    axios.defaults.headers.common["i18n-locale"] = action.payload;
    return { ...state, locale: action.payload };
  },

  [types.SET_LOCALE_LINKS]: (state, action) => {
    return { ...state, localeLinks: action.payload };
  },

  [types.SET_LOCALE_LINKS_REGULAR_MODE]: (state, action) => {
    const { localesAvailables, defaultLocale } = state;
    const url = action.payload;
    let links = {};

    localesAvailables.forEach(locale => {
      links[locale] =
        locale == defaultLocale
          ? url == "/" ? url : `/${url}`
          : url == "/" ? `/${locale}` : `/${locale}/${url}`;
    });

    return { ...state, localeLinks: links };
  },

  [types.SET_LOCALE_LINKS_WITHOUT_PREFIX]: (state, action) => {
    const { localesAvailables, defaultLocale } = state;
    let links = {};

    localesAvailables.forEach(locale => {
      if (action.payload[locale]) {
        let url = action.payload[locale];

        links[locale] =
          locale == defaultLocale
            ? url == "/" ? url : `${url}`
            : url == "/" ? `/${locale}` : `/${locale}${url}`;
      } else {
        links[locale] = "";
      }
    });

    return { ...state, localeLinks: links };
  }
});

export default reducer;
