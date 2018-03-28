import i18nReducer from "./reducer";
import {
  setLocale,
  setLocaleLinks,
  setLocaleLinksRegularMode,
  setLocaleLinksWithoutPrefix
} from "./actions";
import I18nProvider from "./components/I18nProvider";
import I18nLink from "./components/I18nLink";
import withI18n from "./withI18n";

export {
  i18nReducer,
  setLocale,
  setLocaleLinks,
  setLocaleLinksRegularMode,
  setLocaleLinksWithoutPrefix,
  I18nProvider,
  I18nLink,
  withI18n
};
