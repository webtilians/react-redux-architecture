import { createReducer } from "../../utils";
import * as types from "./types";

const initialState = {
  menuMobile: false,
  modalAuth: false,
  contactForm: false,
  menuFixed: false,
  openSearchedInput: "close",

  categories: {
    data: [],
    fetching: false,
    fetched: false,
    error: null
  }
};

const reducer = createReducer(initialState, {
  [types.OPEN_INPUT_SEARCH]: (state, action) => {
    return { ...state, openSearchedInput: action.payload };
  },

  [types.CLOSE_INPUT_SEARCH]: (state, action) => {
    return { ...state, openSearchedInput: action.payload };
  },

  [types.SET_MENU_MOBILE]: (state, action) => {
    return { ...state, menuMobile: !initialState.menuMobile };
  },

  [types.HIDE_MENU_MOBILE]: (state, action) => {
    return { ...state, menuMobile: action.payload };
  },

  [types.BODY_SCROLL_MOVE]: (state, action) => {
    return { ...state, menuFixed: action.payload };
  },

  [types.SET_MODAL_AUTH]: (state, action) => {
    return { ...state, modalAuth: action.payload };
  },

  [types.CONTACT_FORM_SET_SHOW]: (state, action) => {
    return { ...state, contactForm: action.payload };
  },

  [types.CATEGORIES_FETCH_START]: (state, action) => {
    const categories = {
      ...state.categories,
      fetching: true,
      fetched: false,
      error: null
    };

    return { ...state, categories };
  },

  [types.CATEGORIES_FETCH_COMPLETED]: (state, action) => {
    const categories = {
      ...state.categories,
      data: action.payload,
      fetching: false,
      fetched: true
    };

    return { ...state, categories };
  },

  [types.CATEGORIES_FETCH_REJECTED]: (state, action) => {
    const categories = {
      ...state.categories,
      fetching: false,
      error: action.payload
    };

    return { ...state, categories };
  }
});

export default reducer;
