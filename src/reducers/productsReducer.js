import { FETCH_ITEMS } from '../actions/productsActions';

const DEFAULT_STATE = {count: 0};

export default function products(state = DEFAULT_STATE, action={}) {
  switch (action.type) {
    case FETCH_ITEMS: {
      console.log('hey', action)
      let hey = {...state, count: state.count + action.payload };

      console.log('ssss', state)
      console.log('ssiiiss', hey)
      return hey
    }
    default:
      return state;
  }
}
