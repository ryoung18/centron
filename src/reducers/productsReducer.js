import {
  FETCH_ITEMS_START,
  FETCH_ITEMS_ERROR,
  RECEIVE_ITEMS
} from "../actions/productsActions";

const DEFAULT_STATE = {
  fetching: false,
  fetched: false,
  error: null,
  categories: [],
  products: []
};

export default function products(state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    case FETCH_ITEMS_START:
      return { ...state, fetching: true };

    case FETCH_ITEMS_ERROR:
      return { ...state, fetching: false, error: null };

    case RECEIVE_ITEMS:
      return { ...state, fetching: false, fetched: true, ...action.payload };

    default:
      return state;
  }
}
