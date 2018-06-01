import { createStore, combineReducers } from 'redux';
import myformReducer from '../reducers/form';
import wizardReducer from '../reducers/wizard';
import { reducer as formReducer } from 'redux-form';

export default () => {
  const store = createStore(
    combineReducers({
      simpleform: myformReducer,
      wizard: wizardReducer,
      form: formReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
