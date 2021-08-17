import {
  GET_ALL_GIFT_CARDS,
  EDIT_GIFT_CARD,
  ADD_NEW_GIFT_CARD,
} from "./actionTypes";
export const getAllGiftCards = (data) => {
  return {
    type: GET_ALL_GIFT_CARDS,
    payload: data,
  };
};
export const editGiftCard = (id, data) => {
  return {
    type: EDIT_GIFT_CARD,
    payload: { data, id },
  };
};
export const addNewGiftCard = (data) => {
  return {
    type: ADD_NEW_GIFT_CARD,
    payload: data,
  };
};
