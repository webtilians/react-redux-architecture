import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { routerReducer } from "react-router-redux";

import { i18nReducer } from "../modules/i18n";
import { layoutReducer } from "../modules/layout";

import { homeReducer } from "../modules/home";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  routing: routerReducer,
  i18n: i18nReducer,
  layout: layoutReducer,

  home: homeReducer
});

const initStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default initStore;
