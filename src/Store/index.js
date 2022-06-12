import { createStore } from 'redux';

const initialState = { darkMode: true };

const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'toggle':
      return {
        darkMode: !darkMode,
      };
      break;
    default:
      return state;
  }
};

const store = createStore(toggleReducer);

console.log(store.getState());

const toggleSubscriber = () => {
  const latestState = store.getState();
  console.log('latestState -> ', latestState);
};

store.subscribe(counterToggle);

export default store;