import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initState = {
  images: [{
    title: '',
    img: '',
  }],
};

// eslint-disable-next-line default-param-last
function routReducer(state = initState, action: any) {
  switch (action.type) {
    case 'ADDIMAGE':
      return {
        ...state,
        images: [...state.images, action.images],
      };
    case 'EDITIMAGE':
      return {
        ...state,
        images: [...state.images, action.images],
      };
    default:
      return state;
  }
}

// Create a Redux store holding the state of the app.
export const store = createStore(
  routReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
