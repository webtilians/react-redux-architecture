import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { ThemeProvider } from "styled-components";
import { I18nProvider } from "./modules/i18n";
import { initStore, createRoutes, theme, i18n } from "./config";
import { connect } from "react-redux";

import registerServiceWorker from "./registerServiceWorker";

const store = initStore(window.__PRELOADED_STATE__ || {});
const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(store);
const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <I18nProvider messages={i18n}>
        <Router history={history} routes={routes} />
      </I18nProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
