import { ajaxRequest } from '../utils/helpers'
export const FETCH_ITEMS = 'FETCH_ITEMS';

export function fetchItems(products) {
  return {
    type: FETCH_ITEMS,
    payload: products
  }

  // return (dispatch) =>{
  //   setTimeout(() => {
  //     dispatch({
  //       type: FETCH_ITEMS,
  //       payload: [1,2,63]
  //     })
  //   , 2000})
  // }
}
