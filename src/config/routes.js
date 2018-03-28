import { createLocaleRoutes } from "../utils";
import { setLocale } from "../modules/i18n";
import config from "./config";

import { LayoutContainer } from "../modules/layout";

import { HomeContainer } from "../modules/home";

const routes = [{ path: "/", component: HomeContainer }];

const createRoutes = store => {
  return createLocaleRoutes({
    localesAvailables: config.localesAvailables,
    defaultLocale: config.defaultLocale,
    layout: LayoutContainer,
    routes,
    setLocale: locale => store.dispatch(setLocale(locale))
  });
};

export default createRoutes;
