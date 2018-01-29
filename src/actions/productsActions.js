import { BASE_URL } from "../utils/helpers";
import axios from "axios";
import { ajaxRequest } from "../utils/helpers";
export const FETCH_ITEMS_START = "FETCH_ITEMS_START";
export const FETCH_ITEMS_ERROR = "FETCH_ITEMS_ERROR";
export const RECEIVE_ITEMS = "FETCH_ITEMS";

export function fetchItems(products) {
  // return {
  //   type: FETCH_ITEMS,
  //   payload: products
  // }

  return dispatch => {
    dispatch({ type: FETCH_ITEMS_START });
    // axios
    //   .get(`${BASE_URL}/api/products`)
    //   .then(data => {
    //     dispatch({
    //       type: RECEIVE_ITEMS,
    //       payload: data
    //     });
    //   })
    //   .catch(error => {
    //     dispatch({
    //       type: FETCH_ITEMS_ERROR,
    //       payload: error
    //     });
    //   });
    setTimeout(() => {
      dispatch({
        type: RECEIVE_ITEMS,
        payload: ajaxRequest
      });
    }, 2000);


  };
}
