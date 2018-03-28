import React from "react";
import { Route, IndexRoute } from "react-router";

function buildRoute(route, locale, setLocale = null) {
  const onEnter =
    setLocale === null
      ? () => {}
      : () => {
          setLocale(locale);
        };

  const props = {
    key: route.path,
    path: route.path,
    component: route.component,
    onEnter: onEnter
  };

  return route.path == "/" ? (
    <IndexRoute
      key={route.path}
      component={route.component}
      onEnter={onEnter}
    />
  ) : (
    <Route {...props} />
  );
}

function createLocaleRoutes({
  localesAvailables,
  defaultLocale,
  layout,
  routes,
  setLocale = null
}) {
  const localesWithoutDefault = localesAvailables.filter(
    locale => locale != defaultLocale
  );
  const locales = [...localesWithoutDefault, defaultLocale];

  return (
    <Route>
      {locales.map(locale => (
        <Route
          key={locale}
          path={locale == defaultLocale ? "/" : `/${locale}`}
          component={layout}
        >
          {routes.map(route => buildRoute(route, locale, setLocale))}
        </Route>
      ))}
    </Route>
  );
}

export default createLocaleRoutes;
