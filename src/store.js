import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import {
  ADD_NEW_GIFT_CARD,
  EDIT_GIFT_CARD,
  GET_ALL_GIFT_CARDS,
} from "./actionTypes";

const reducer = (state = { giftCards: [] }, action) => {
  switch (action.type) {
    case GET_ALL_GIFT_CARDS:
      return { ...state, giftCards: action.payload };

    case EDIT_GIFT_CARD:
      const { id, data } = action.payload;

      return {
        ...state,
        giftCards: state.giftCards.map((giftCard) =>
          giftCard.id.toString() === id ? data : giftCard
        ),
      };
    case ADD_NEW_GIFT_CARD:
      return {
        ...state,
        giftCards: [...state.giftCards, action.payload],
      };

    default:
      return state;
  }

  return {};
};

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
