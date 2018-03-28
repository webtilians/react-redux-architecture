import { createReducer } from "../../utils";
import * as types from "./types";

const initialState = {
  homeSlider: null,
  fetching: false,
  fetched: false,
  error: null
};

const reducer = createReducer(initialState, {
  [types.HOMESLIDER_FETCH_START]: (state, action) => {
    return {
      ...state,
      fetching: true,
      fetched: false
    };
  },

  [types.HOMESLIDER_FETCH_COMPLETED]: (state, action) => {
    return {
      ...state,
      fetching: false,
      fetched: true,
      homeSlider: action.payload
    };
  },

  [types.HOMESLIDER_FETCH_REJECTED]: (state, action) => {
    return {
      ...state,
      fetching: false,
      error: action.payload
    };
  }
});

export default reducer;
